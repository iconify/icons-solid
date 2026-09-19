import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/z/z84e8ubat.css';
import '../../css/n/nf4n1zbnv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfHEKlDBG"><g class="adexpl72i"><path clip-rule="evenodd" class="z84e8ubat"/><path class="nf4n1zbnv"/></g></mask></defs><path mask="url(#SVGfHEKlDBG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:keyhole"} {...others} />);
}

export default Component;
