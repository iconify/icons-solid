import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i24gx0b8d.css';
import '../../css/r/rnqc0wxrk.css';
import '../../css/j/jmpiblj0v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i24gx0b8d"/><path class="rnqc0wxrk"/><path class="jmpiblj0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:solar-cell"} {...others} />);
}

export default Component;
