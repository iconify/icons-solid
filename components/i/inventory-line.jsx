import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_a0-8m9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_a0-8m9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:inventory-line"} {...others} />);
}

export default Component;
