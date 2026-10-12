import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxia6zz2s.css';
import '../../css/a/afzjcibgy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rxia6zz2s"/><path class="afzjcibgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pi-20-bold"} {...others} />);
}

export default Component;
