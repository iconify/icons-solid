import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7f6twbnp.css';
import '../../css/s/s5_vv4szb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7f6twbnp"/><path class="s5_vv4szb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:blur-alt"} {...others} />);
}

export default Component;
