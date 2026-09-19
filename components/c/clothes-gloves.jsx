import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d48krva-u.css';
import '../../css/n/nu3w2abno.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkYqmLdhu"><g class="ft5dv1b6b"><path class="d48krva-u"/><path class="nu3w2abno"/></g></mask></defs><path mask="url(#SVGkYqmLdhu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-gloves"} {...others} />);
}

export default Component;
