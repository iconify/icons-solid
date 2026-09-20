import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psj8mabmt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="psj8mabmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:p-small-bicycle-parking-rack"} {...others} />);
}

export default Component;
