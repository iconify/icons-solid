import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc2h1t7kb.css';
import '../../css/w/watacqxif.css';
import '../../css/y/yb4htytdh.css';
import '../../css/m/mf06j8blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hc2h1t7kb"/><path class="watacqxif"/><path class="yb4htytdh"/><path class="mf06j8blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-business-card"} {...others} />);
}

export default Component;
