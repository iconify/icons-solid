import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdsu42b0b.css';
import '../../css/z/z0-acdc1y.css';
import '../../css/x/x9_6abtpr.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jdsu42b0b"/><path class="z0-acdc1y"/><path class="x9_6abtpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-definition"} {...others} />);
}

export default Component;
