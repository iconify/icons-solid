import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvg0gs5tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvg0gs5tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sort-horizontal-sharp"} {...others} />);
}

export default Component;
