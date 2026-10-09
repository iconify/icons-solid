import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5y_4mbdq.css';
import '../../css/g/gdcg3vxtl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5y_4mbdq"/><path class="gdcg3vxtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-bottle-48-bold"} {...others} />);
}

export default Component;
