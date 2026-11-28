import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgi_gv_ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgi_gv_ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:keyboard-solid"} {...others} />);
}

export default Component;
