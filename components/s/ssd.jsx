import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm_zrzfjk.css';
import '../../css/f/fa1_uabup.css';
import '../../css/q/qhvpxwb0l.css';
import '../../css/i/i13dvsb0b.css';
import '../../css/c/c-jks692x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWC4SMehl"><g class="ft5dv1b6b"><path class="zm_zrzfjk"/><path class="fa1_uabup"/><path class="qhvpxwb0l"/><circle class="i13dvsb0b"/><path class="c-jks692x"/></g></mask></defs><path mask="url(#SVGWC4SMehl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ssd"} {...others} />);
}

export default Component;
