import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0l4_3bke.css';
import '../../css/d/d01f2_1py.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0l4_3bke"/><path class="d01f2_1py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cello-24"} {...others} />);
}

export default Component;
