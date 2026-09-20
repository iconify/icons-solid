import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_5l8lb9a.css';
import '../../css/i/io3w-rbsf.css';
import '../../css/g/g7_albbtb.css';
import '../../css/v/v415fabhh.css';
import '../../css/o/o83e2bcbr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f_5l8lb9a"/><path class="io3w-rbsf"/><circle class="g7_albbtb"/><path class="v415fabhh"/><path class="o83e2bcbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:first-quarter-moon-face"} {...others} />);
}

export default Component;
