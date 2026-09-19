import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/j/jo5t6_bbs.css';
import '../../css/p/purmy4bxs.css';
import '../../css/i/iwvnsxbma.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><mask id="circleFlagsPms0" width="576" height="576" x="-32" y="-32" maskUnits="userSpaceOnUse"><circle class="bc1fd0lxe"/></mask></defs><g mask="url(#circleFlagsPms0)"><path class="wj-7246uw"/><path class="jo5t6_bbs"/><path class="purmy4bxs"/><path class="iwvnsxbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pms"} {...others} />);
}

export default Component;
