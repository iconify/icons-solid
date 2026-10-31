import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_4c0abso.css';
import '../../css/h/hni6s_bol.css';
import '../../css/y/yjdgsrw6x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="u_4c0abso"/><path class="hni6s_bol"/><path class="yjdgsrw6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:basque-country"} {...others} />);
}

export default Component;
