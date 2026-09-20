import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3s_kac2u.css';
import '../../css/v/vyoqtroix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l3s_kac2u"/><path class="vyoqtroix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microsoft-onedrive-logo-2"} {...others} />);
}

export default Component;
