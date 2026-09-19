import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mwtu4sbam.css';
import '../../css/j/jer63kble.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNFCkdb9e"><g class="wwvp95byt"><path class="mwtu4sbam"/><path class="jer63kble"/></g></mask></defs><path mask="url(#SVGNFCkdb9e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thinking-problem"} {...others} />);
}

export default Component;
