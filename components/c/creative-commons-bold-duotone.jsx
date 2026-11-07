import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/r/rehh5j-gt.css';
import '../../css/v/v9df5cbny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="rehh5j-gt"/><path class="v9df5cbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:creative-commons-bold-duotone"} {...others} />);
}

export default Component;
