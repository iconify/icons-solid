import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf80ehb4v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mf80ehb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:table-and-two-chairs-roof-and-walls"} {...others} />);
}

export default Component;
