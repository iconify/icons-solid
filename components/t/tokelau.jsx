import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymvjmwp_c.css';
import '../../css/l/lj8m_5b8h.css';
import '../../css/d/dealb4p_u.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ymvjmwp_c"/><path class="lj8m_5b8h"/><path class="dealb4p_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:tokelau"} {...others} />);
}

export default Component;
