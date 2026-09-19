import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a73f9-bto.css';
import '../../css/w/w8e4zs4sx.css';
import '../../css/w/w5hp-fb7h.css';
import '../../css/h/hxu-4ufpy.css';
import '../../css/k/k-319-kjj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a73f9-bto"/><path class="w8e4zs4sx"/><path class="w5hp-fb7h"/><path class="hxu-4ufpy"/><path class="k-319-kjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cobb-angle"} {...others} />);
}

export default Component;
