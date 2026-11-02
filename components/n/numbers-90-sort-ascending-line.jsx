import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4qcw2v3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4qcw2v3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:numbers-90-sort-ascending-line"} {...others} />);
}

export default Component;
