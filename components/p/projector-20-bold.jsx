import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al-13db5j.css';
import '../../css/x/xv1e-qb3o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="al-13db5j"/><path class="xv1e-qb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:projector-20-bold"} {...others} />);
}

export default Component;
