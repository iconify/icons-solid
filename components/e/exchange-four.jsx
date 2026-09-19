import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ufudkb00c.css';
import '../../css/f/f78qrfp0s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlyyFfe2R"><g class="wwvp95byt"><path class="ufudkb00c"/><path class="f78qrfp0s"/></g></mask></defs><path mask="url(#SVGlyyFfe2R)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:exchange-four"} {...others} />);
}

export default Component;
