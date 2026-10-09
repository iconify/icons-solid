import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o05ktk5it.css';
import '../../css/p/pya8cs06p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o05ktk5it"/><path class="pya8cs06p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-knife-20"} {...others} />);
}

export default Component;
