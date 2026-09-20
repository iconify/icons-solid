import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvsu9ljnl.css';
import '../../css/w/whpncgbes.css';
import '../../css/l/lr0wsqbzh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zvsu9ljnl"/><path class="whpncgbes"/><path class="lr0wsqbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:no-stencil"} {...others} />);
}

export default Component;
