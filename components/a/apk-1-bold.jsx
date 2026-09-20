import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uma6umd4x.css';
import '../../css/u/ua-paobrh.css';
import '../../css/x/xe0_hsbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uma6umd4x"/><path class="ua-paobrh"/><path class="xe0_hsbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:apk-1-bold"} {...others} />);
}

export default Component;
