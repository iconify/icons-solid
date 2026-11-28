import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/agcigacbg.css';
import '../../css/g/gm-xp2qic.css';
import '../../css/r/r6y_hob0j.css';
import '../../css/n/nwwepk7cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="agcigacbg"/><path class="gm-xp2qic"/><path class="r6y_hob0j"/><path class="nwwepk7cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:locker"} {...others} />);
}

export default Component;
