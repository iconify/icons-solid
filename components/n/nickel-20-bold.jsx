import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkwxxqb3q.css';
import '../../css/h/hpui6-m_s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kkwxxqb3q"/><path class="hpui6-m_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nickel-20-bold"} {...others} />);
}

export default Component;
