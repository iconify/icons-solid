import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m5srtabza.css';
import '../../css/m/m6jdw9b7u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="m5srtabza"/><path class="m6jdw9b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-20"} {...others} />);
}

export default Component;
