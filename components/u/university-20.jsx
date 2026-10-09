import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t__07qb8r.css';
import '../../css/z/z7w62dbic.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t__07qb8r"/><path class="z7w62dbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:university-20"} {...others} />);
}

export default Component;
