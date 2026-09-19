import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkm6zyj7x.css';
import '../../css/i/idjmobcht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jkm6zyj7x"/><path class="idjmobcht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:basket-sharp"} {...others} />);
}

export default Component;
