import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyhy5lb0z.css';
import '../../css/c/cxf3gybkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gyhy5lb0z"/><path class="cxf3gybkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chainsaw-20-bold"} {...others} />);
}

export default Component;
