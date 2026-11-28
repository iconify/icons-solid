import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on9-4bc_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="on9-4bc_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:clipboard-refresh"} {...others} />);
}

export default Component;
