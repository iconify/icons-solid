import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_ae8_txj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_ae8_txj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:3d-filament"} {...others} />);
}

export default Component;
