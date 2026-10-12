import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9if2ebze.css';
import '../../css/e/eog-i8bei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h9if2ebze"/><path class="eog-i8bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stapler-20"} {...others} />);
}

export default Component;
