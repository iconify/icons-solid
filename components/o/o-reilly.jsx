import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcpgq_b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zcpgq_b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:o-reilly"} {...others} />);
}

export default Component;
