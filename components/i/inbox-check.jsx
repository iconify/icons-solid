import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecqz2j0dv.css';
import '../../css/a/ag3a--o6g.css';
import '../../css/h/hu6giccde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecqz2j0dv"/><path class="ag3a--o6g"/><path class="hu6giccde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-check"} {...others} />);
}

export default Component;
