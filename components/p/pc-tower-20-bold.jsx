import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_05epb2z.css';
import '../../css/y/y3_5i7bsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m_05epb2z"/><path class="y3_5i7bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pc-tower-20-bold"} {...others} />);
}

export default Component;
