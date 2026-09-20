import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhx6kd09d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lhx6kd09d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:light-rail"} {...others} />);
}

export default Component;
