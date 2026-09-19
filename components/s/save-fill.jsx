import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc5busrsc.css';
import '../../css/o/oim_e1bef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc5busrsc"/><path class="oim_e1bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:save-fill"} {...others} />);
}

export default Component;
