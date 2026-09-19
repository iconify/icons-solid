import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vrkcudx6t.css';
import '../../css/k/kze9bbbkb.css';
import '../../css/z/zxg8_ebhl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDDuZGc2I"><g class="wwvp95byt"><path class="vrkcudx6t"/><rect class="kze9bbbkb"/><path class="zxg8_ebhl"/></g></mask></defs><path mask="url(#SVGDDuZGc2I)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:newlybuild"} {...others} />);
}

export default Component;
