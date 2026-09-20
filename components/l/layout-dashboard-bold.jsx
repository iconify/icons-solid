import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vby78g3_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vby78g3_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:layout-dashboard-bold"} {...others} />);
}

export default Component;
