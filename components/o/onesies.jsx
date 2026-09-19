import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k62bcpbzj.css';
import '../../css/i/i4fqsvg1a.css';
import '../../css/m/mzk9v8g-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGisQ0LeEB"><g class="wwvp95byt"><path class="k62bcpbzj"/><path class="i4fqsvg1a"/><path class="mzk9v8g-t"/></g></mask></defs><path mask="url(#SVGisQ0LeEB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:onesies"} {...others} />);
}

export default Component;
