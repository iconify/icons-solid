import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_eh_ihjp.css';
import '../../css/u/u7ypgqgoe.css';
import '../../css/a/a19wo66mh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w_eh_ihjp"/><path class="u7ypgqgoe"/><path class="a19wo66mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-curve-manual"} {...others} />);
}

export default Component;
