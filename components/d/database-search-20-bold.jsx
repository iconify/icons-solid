import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stnu0vheg.css';
import '../../css/z/z-ebmzb8v.css';
import '../../css/x/xxlvr9b9g.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="stnu0vheg"/><path class="z-ebmzb8v"/><path class="xxlvr9b9g"/><path class="e8_sa6eqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-search-20-bold"} {...others} />);
}

export default Component;
