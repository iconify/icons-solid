import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow2oqr99c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow2oqr99c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:tshirt-plus"} {...others} />);
}

export default Component;
