import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v9l7xialg.css';
import '../../css/y/ys5oz0l2k.css';
import '../../css/w/w40ns9b1m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbAMCjcyv"><g class="wwvp95byt"><path class="v9l7xialg"/><path class="ys5oz0l2k"/><path class="w40ns9b1m"/></g></mask></defs><path mask="url(#SVGbAMCjcyv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bottle-one"} {...others} />);
}

export default Component;
