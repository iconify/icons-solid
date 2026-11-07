import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2m6oob6i.css';
import '../../css/u/uoyje9-pu.css';
import '../../css/y/y0d-blzxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2m6oob6i"/><path class="uoyje9-pu"/><path clip-rule="evenodd" class="y0d-blzxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-2-bold-duotone"} {...others} />);
}

export default Component;
