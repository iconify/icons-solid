import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7cvghjjq.css';
import '../../css/x/x9yd_cc7v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o7cvghjjq"/><path clip-rule="evenodd" class="x9yd_cc7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:id-card-16"} {...others} />);
}

export default Component;
