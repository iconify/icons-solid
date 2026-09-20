import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rujwnpbfw.css';
import '../../css/u/u-n_fxiyd.css';
import '../../css/l/l9yn4ydvz.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="rujwnpbfw"/><path clip-rule="evenodd" class="u-n_fxiyd"/><path class="l9yn4ydvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:user-multiple-4"} {...others} />);
}

export default Component;
