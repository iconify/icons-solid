import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj6zyvo6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sj6zyvo6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:pregnant-woman-priority-seating"} {...others} />);
}

export default Component;
