import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/ctlf8t4lu.css';
import '../../css/m/mhgeykkaq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNfqbldQf"><g class="wwvp95byt"><path class="ctlf8t4lu"/><path class="mhgeykkaq"/></g></mask></defs><path mask="url(#SVGNfqbldQf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:texture-two"} {...others} />);
}

export default Component;
