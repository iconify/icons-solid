import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mgt481b0m.css';
import '../../css/z/z6atkwxdb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRBykTdYC"><g class="wwvp95byt"><path class="mgt481b0m"/><path class="z6atkwxdb"/></g></mask></defs><path mask="url(#SVGRBykTdYC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nurse-cap"} {...others} />);
}

export default Component;
