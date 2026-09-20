import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/f/fhxr92bhq.css';
import '../../css/r/rt5epac7j.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="fhxr92bhq"/><path class="rt5epac7j"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-congo-kinshasa"} {...others} />);
}

export default Component;
