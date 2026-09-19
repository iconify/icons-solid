import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zql7dlb8m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zql7dlb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:barbed-wire"} {...others} />);
}

export default Component;
