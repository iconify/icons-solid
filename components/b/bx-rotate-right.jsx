import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg4mjnb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xg4mjnb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-rotate-right"} {...others} />);
}

export default Component;
