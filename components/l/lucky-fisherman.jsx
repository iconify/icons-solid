import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw7n_3bxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bw7n_3bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:lucky-fisherman"} {...others} />);
}

export default Component;
