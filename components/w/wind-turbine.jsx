import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh8yjs2_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kh8yjs2_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:wind-turbine"} {...others} />);
}

export default Component;
