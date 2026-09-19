import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/crnb93ntl.css';
import '../../css/c/c575j-byr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKkdZ2csA"><g class="wwvp95byt"><path class="crnb93ntl"/><path class="c575j-byr"/></g></mask></defs><path mask="url(#SVGKkdZ2csA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:success"} {...others} />);
}

export default Component;
