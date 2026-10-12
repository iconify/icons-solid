import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glrde1b3i.css';
import '../../css/h/hgi3nccbu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="glrde1b3i"/><path class="hgi3nccbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-48"} {...others} />);
}

export default Component;
