import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/ky42xuvke.css';
import '../../css/t/ta-qy393a.css';
import '../../css/p/phixcwbng.css';
import '../../css/q/q8fyyfufk.css';
import '../../css/g/gxg84xsej.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVgtstein"><g class="wwvp95byt"><rect class="ky42xuvke"/><path class="ta-qy393a"/><path class="phixcwbng"/><path class="q8fyyfufk"/><path class="gxg84xsej"/></g></mask></defs><path mask="url(#SVGVgtstein)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:perfumer-bottle"} {...others} />);
}

export default Component;
