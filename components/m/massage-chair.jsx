import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l8-7_vbmo.css';
import '../../css/i/io4djxbci.css';
import '../../css/h/hmn32ibuy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3Q6iqbax"><g class="wwvp95byt"><rect class="l8-7_vbmo"/><path class="io4djxbci"/><path class="hmn32ibuy"/></g></mask></defs><path mask="url(#SVG3Q6iqbax)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:massage-chair"} {...others} />);
}

export default Component;
