import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py5k_qboi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="py5k_qboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:pet-grooming"} {...others} />);
}

export default Component;
