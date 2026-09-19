import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/a/aheys2bnt.css';
import '../../css/h/hvfyshbwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdTSSBenS"><g class="gopnm44um"><path class="aheys2bnt"/><path class="hvfyshbwi"/></g></mask></defs><path mask="url(#SVGdTSSBenS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:flash-payment"} {...others} />);
}

export default Component;
