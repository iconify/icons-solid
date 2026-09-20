import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvgk9mbyi.css';
import '../../css/r/rz6_xdbdi.css';
import '../../css/l/lcanl8bdt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvgk9mbyi"/><path class="rz6_xdbdi"/><path class="lcanl8bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-favorite-rate"} {...others} />);
}

export default Component;
