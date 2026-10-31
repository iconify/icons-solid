import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn_klbhwa.css';
import '../../css/k/k18v_ab6e.css';
import '../../css/v/vfnwwubpy.css';
import '../../css/m/ms9yjsb5g.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jn_klbhwa"/><path class="k18v_ab6e"/><path class="vfnwwubpy"/><path class="ms9yjsb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:venezuela"} {...others} />);
}

export default Component;
