import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_o4c-fyf.css';
import '../../css/b/bafc_qt6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_o4c-fyf"/><path class="bafc_qt6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:eye"} {...others} />);
}

export default Component;
