import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/s/ssnzky-qs.css';
import '../../css/u/upkaycbwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnVDTcbDL"><g class="adexpl72i"><path class="ssnzky-qs"/><path clip-rule="evenodd" class="upkaycbwx"/></g></mask></defs><path mask="url(#SVGnVDTcbDL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:damage-map"} {...others} />);
}

export default Component;
