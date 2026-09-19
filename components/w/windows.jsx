import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti_jksrsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti_jksrsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:windows"} {...others} />);
}

export default Component;
