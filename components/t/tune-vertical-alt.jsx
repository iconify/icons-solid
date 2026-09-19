import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd-wl6bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nd-wl6bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tune-vertical-alt"} {...others} />);
}

export default Component;
