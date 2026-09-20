import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-6y6ibqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-6y6ibqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:apachenetbeanside"} {...others} />);
}

export default Component;
