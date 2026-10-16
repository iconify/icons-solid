import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr6w732hx.css';
import '../../css/a/aslqxg6fb.css';
import '../../css/f/fw_p-ryho.css';
import '../../css/c/cooiocbhc.css';
import '../../css/m/m_m_e8loz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gr6w732hx"/><path class="aslqxg6fb"/><path class="fw_p-ryho"/><path class="cooiocbhc"/><path class="m_m_e8loz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:digital-twin-20-bold"} {...others} />);
}

export default Component;
