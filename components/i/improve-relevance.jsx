import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufn6_c2nl.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/i/ixz9bpndl.css';
import '../../css/q/qp7u-0nuf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ufn6_c2nl"/><circle class="e39ud6bwf"/><path class="ixz9bpndl"/><path class="qp7u-0nuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:improve-relevance"} {...others} />);
}

export default Component;
