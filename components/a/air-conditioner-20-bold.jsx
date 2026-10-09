import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7m_sy6ir.css';
import '../../css/q/qmmje9uau.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b7m_sy6ir"/><path class="qmmje9uau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioner-20-bold"} {...others} />);
}

export default Component;
