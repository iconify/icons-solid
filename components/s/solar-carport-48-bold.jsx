import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u37j8eblv.css';
import '../../css/b/bj00cy14m.css';
import '../../css/h/hmvn1yvxd.css';
import '../../css/z/zkrdz4b4r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u37j8eblv"/><path class="bj00cy14m"/><path class="hmvn1yvxd"/><path class="zkrdz4b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-carport-48-bold"} {...others} />);
}

export default Component;
