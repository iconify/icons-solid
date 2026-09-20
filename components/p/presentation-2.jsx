import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gc5yvmb1d.css';
import '../../css/b/b0i-7pbeq.css';
import '../../css/i/iperudbvd.css';
import '../../css/i/ik4d6-bvc.css';
import '../../css/s/sqy45hlmb.css';
import '../../css/r/r1r3ozbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gc5yvmb1d"/><path class="b0i-7pbeq"/><path class="iperudbvd"/><path class="ik4d6-bvc"/><path class="sqy45hlmb"/><path class="r1r3ozbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:presentation-2"} {...others} />);
}

export default Component;
