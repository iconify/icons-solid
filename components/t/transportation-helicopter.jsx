import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy9fe6p_r.css';
import '../../css/x/xtw0f8b2d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gy9fe6p_r"/><path class="xtw0f8b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-helicopter"} {...others} />);
}

export default Component;
