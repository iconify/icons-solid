import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq8bm1t3p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eq8bm1t3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:treasure-map-x"} {...others} />);
}

export default Component;
