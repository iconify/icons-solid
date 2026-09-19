import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/powyxpbom.css';
import '../../css/f/f7u7zdkiq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGa5vBobWK"><g class="wwvp95byt"><path class="powyxpbom"/><circle class="f7u7zdkiq"/></g></mask></defs><path mask="url(#SVGa5vBobWK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:video-one"} {...others} />);
}

export default Component;
