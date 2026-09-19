import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka-7rw9rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ka-7rw9rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:up-2-short-arrow"} {...others} />);
}

export default Component;
