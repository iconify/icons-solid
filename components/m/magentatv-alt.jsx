import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zefbo4jxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zefbo4jxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:magentatv-alt"} {...others} />);
}

export default Component;
