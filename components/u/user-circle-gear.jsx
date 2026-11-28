import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cai6_4o_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cai6_4o_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:user-circle-gear"} {...others} />);
}

export default Component;
