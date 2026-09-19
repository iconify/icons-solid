import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/itm_gqbii.css';
import '../../css/p/prjwigbsg.css';
import '../../css/m/m0fg2bb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsCs0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsCs0)"><path class="itm_gqbii"/><path class="prjwigbsg"/><path class="m0fg2bb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cs"} {...others} />);
}

export default Component;
