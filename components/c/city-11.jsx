import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upijwtwan.css';
import '../../css/i/ia_5twbgd.css';
import '../../css/v/v7o1di81n.css';
import '../../css/m/mdp9pwg5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upijwtwan"/><path class="ia_5twbgd"/><path class="v7o1di81n"/><path class="mdp9pwg5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-11"} {...others} />);
}

export default Component;
