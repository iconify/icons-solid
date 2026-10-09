import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3ux1061w.css';
import '../../css/h/hupodmbea.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3ux1061w"/><path class="hupodmbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-meter-20"} {...others} />);
}

export default Component;
