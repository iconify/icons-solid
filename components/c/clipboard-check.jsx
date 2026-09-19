import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cogs88p7l.css';
import '../../css/a/a_u4ptbkw.css';
import '../../css/g/gq3c6gp4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cogs88p7l"/><path class="a_u4ptbkw"/><path class="gq3c6gp4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:clipboard-check"} {...others} />);
}

export default Component;
