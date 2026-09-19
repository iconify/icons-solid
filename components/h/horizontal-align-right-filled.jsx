import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_j4mhb6r.css';
import '../../css/m/m_f_sobnp.css';
import '../../css/y/yi_zyo09o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_j4mhb6r"/><rect class="m_f_sobnp"/><rect class="yi_zyo09o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-align-right-filled"} {...others} />);
}

export default Component;
