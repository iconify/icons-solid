import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gugafwbru.css';
import '../../css/p/pkpr5tboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gugafwbru"/><path class="pkpr5tboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tailings-dam-20"} {...others} />);
}

export default Component;
