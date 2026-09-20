import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m00li1bzt.css';
import '../../css/d/dcthf7bbi.css';

const viewBox = {"width":160,"height":160};
const content = `<g class="m00li1bzt"><rect transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)" class="dcthf7bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:drizzle-orm-dark"} {...others} />);
}

export default Component;
