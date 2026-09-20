import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbm0q3_fl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbm0q3_fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:columns-3-filled"} {...others} />);
}

export default Component;
