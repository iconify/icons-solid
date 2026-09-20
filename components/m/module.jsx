import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd_pfhpum.css';
import '../../css/r/rvpdc71wr.css';
import '../../css/y/yce2z9ujw.css';
import '../../css/p/p5lq4_29g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cd_pfhpum"/><path class="rvpdc71wr"/><path class="yce2z9ujw"/><path class="p5lq4_29g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:module"} {...others} />);
}

export default Component;
