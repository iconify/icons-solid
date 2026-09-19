import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jswgxzn3t.css';
import '../../css/l/lfxgm_3mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jswgxzn3t"/><path class="lfxgm_3mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:battery-1"} {...others} />);
}

export default Component;
