import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ufudkb00c.css';
import '../../css/t/thdsce8mf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0OxWMYek"><g class="wwvp95byt"><path class="ufudkb00c"/><path class="thdsce8mf"/></g></mask></defs><path mask="url(#SVG0OxWMYek)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:transaction"} {...others} />);
}

export default Component;
