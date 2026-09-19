import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmelp6kaw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lmelp6kaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:sort-numberic-desc"} {...others} />);
}

export default Component;
