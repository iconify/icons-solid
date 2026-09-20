import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uql2cd25u.css';
import '../../css/l/l2fsr4bnk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uql2cd25u"/><path clip-rule="evenodd" class="l2fsr4bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mp3-solid"} {...others} />);
}

export default Component;
