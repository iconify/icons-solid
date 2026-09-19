import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aw8wa6b-g.css';
import '../../css/m/mksr67b4b.css';
import '../../css/y/ygmdl6bhu.css';
import '../../css/t/td7mocb9s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX3bHybkZ"><g class="s9cl3zbei"><path class="aw8wa6b-g"/><rect transform="rotate(-90 13 44)" class="mksr67b4b"/><circle class="ygmdl6bhu"/><path class="td7mocb9s"/></g></mask></defs><path mask="url(#SVGX3bHybkZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:passport-one"} {...others} />);
}

export default Component;
