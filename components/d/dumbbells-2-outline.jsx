import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymv_wy09c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ymv_wy09c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-outline"} {...others} />);
}

export default Component;
