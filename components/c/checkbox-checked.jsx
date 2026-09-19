import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2nbqq6me.css';
import '../../css/k/k2czn9xff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w2nbqq6me"/><path class="k2czn9xff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkbox-checked"} {...others} />);
}

export default Component;
