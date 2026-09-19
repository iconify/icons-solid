import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-qmbybjd.css';
import '../../css/z/z8okc2lzd.css';
import '../../css/k/k12ktmbqv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b-qmbybjd"/><circle class="z8okc2lzd"/><path class="k12ktmbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:application-mobile"} {...others} />);
}

export default Component;
