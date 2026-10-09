import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se3r-mb6s.css';
import '../../css/f/fecdmsb2q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="se3r-mb6s"/><path class="fecdmsb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:university-48-bold"} {...others} />);
}

export default Component;
