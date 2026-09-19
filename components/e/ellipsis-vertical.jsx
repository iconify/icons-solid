import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccbo3n_4w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ccbo3n_4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:ellipsis-vertical"} {...others} />);
}

export default Component;
