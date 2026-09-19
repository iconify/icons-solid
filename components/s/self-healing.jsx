import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utsibk09e.css';
import '../../css/v/vke_idboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utsibk09e"/><path class="vke_idboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:self-healing"} {...others} />);
}

export default Component;
