import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/toaurny5c.css';
import '../../css/e/ehmcl--bc.css';
import '../../css/x/xwvmvxbma.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC6Levd3r"><g class="wwvp95byt"><path class="toaurny5c"/><path class="ehmcl--bc"/><path class="xwvmvxbma"/></g></mask></defs><path mask="url(#SVGC6Levd3r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:measuring-cup"} {...others} />);
}

export default Component;
