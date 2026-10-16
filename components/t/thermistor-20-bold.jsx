import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8v8c77oa.css';
import '../../css/g/gt6n7jbpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m8v8c77oa"/><path class="gt6n7jbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermistor-20-bold"} {...others} />);
}

export default Component;
