import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/z/z84e8ubat.css';
import '../../css/z/zsz-dtnnl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEyc5gdav"><g class="adexpl72i"><path clip-rule="evenodd" class="z84e8ubat"/><path class="zsz-dtnnl"/></g></mask></defs><path mask="url(#SVGEyc5gdav)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gps"} {...others} />);
}

export default Component;
