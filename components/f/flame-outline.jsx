import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg9nnwstw.css';
import '../../css/u/uz_ojxb6y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sg9nnwstw"/><path class="uz_ojxb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:flame-outline"} {...others} />);
}

export default Component;
