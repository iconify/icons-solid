import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/e/ewabcgb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="translate(4)" class="n1lsf0bnc"><circle class="aqhok2bbj"/><path class="ewabcgb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:figma"} {...others} />);
}

export default Component;
