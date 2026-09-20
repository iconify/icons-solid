import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocbd0c1lk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ocbd0c1lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:view-split-20-solid"} {...others} />);
}

export default Component;
