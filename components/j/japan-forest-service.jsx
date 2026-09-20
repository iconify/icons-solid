import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir6jv9c4n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ir6jv9c4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:japan-forest-service"} {...others} />);
}

export default Component;
