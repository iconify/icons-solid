import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqglfy7gf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqglfy7gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-narrow-right-dashed"} {...others} />);
}

export default Component;
