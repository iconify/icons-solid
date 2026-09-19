import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw63rpeky.css';
import '../../css/m/mfbf4utcm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lw63rpeky"/><path class="mfbf4utcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:forum"} {...others} />);
}

export default Component;
