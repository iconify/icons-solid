import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bl16oqbnl.css';
import '../../css/y/y7y8zfbel.css';
import '../../css/l/l1et1vvup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bl16oqbnl"/><path class="y7y8zfbel"/><path class="l1et1vvup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-line-duotone"} {...others} />);
}

export default Component;
