import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiv92mbuz.css';
import '../../css/f/fu98lubud.css';
import '../../css/o/o32ixwgun.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tiv92mbuz"/><path class="fu98lubud"/><path class="o32ixwgun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-view"} {...others} />);
}

export default Component;
