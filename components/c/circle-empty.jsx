import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzd0j5pdz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qzd0j5pdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:circle-empty"} {...others} />);
}

export default Component;
