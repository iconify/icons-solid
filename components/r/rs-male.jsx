import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/ikvx1nbvt.css';
import '../../css/f/fyrldibwl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpcARxd5a"><g class="wwvp95byt"><path class="ikvx1nbvt"/><path class="fyrldibwl"/></g></mask></defs><path mask="url(#SVGpcARxd5a)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rs-male"} {...others} />);
}

export default Component;
