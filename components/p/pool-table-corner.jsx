import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdoipbzxp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zdoipbzxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pool-table-corner"} {...others} />);
}

export default Component;
