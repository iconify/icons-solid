import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-w1mof7v.css';
import '../../css/t/tt8n265dz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b-w1mof7v"/><path class="tt8n265dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:induction-hob-20-bold"} {...others} />);
}

export default Component;
