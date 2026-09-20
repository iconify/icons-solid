import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yle_3hkkh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yle_3hkkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xbox-game-pass-light"} {...others} />);
}

export default Component;
