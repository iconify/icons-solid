import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqls33b8r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gqls33b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:squares-2x2-16-solid"} {...others} />);
}

export default Component;
