import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v56opriaa.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/w/wud5a85_x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="v56opriaa"/><path class="d1x_6zbkv"/><path class="wud5a85_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:nicaragua"} {...others} />);
}

export default Component;
