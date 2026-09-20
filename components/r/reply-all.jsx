import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgfyvbb5e.css';
import '../../css/u/ud8i2ab-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zgfyvbb5e"/><path class="ud8i2ab-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:reply-all"} {...others} />);
}

export default Component;
