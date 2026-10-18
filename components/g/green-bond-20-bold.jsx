import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrr1ab6u.css';
import '../../css/v/vtpfxs3yr.css';
import '../../css/o/oebxy1zud.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dyrr1ab6u"/><path class="vtpfxs3yr"/><path class="oebxy1zud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-bond-20-bold"} {...others} />);
}

export default Component;
