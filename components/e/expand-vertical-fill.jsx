import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeo-4db_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xeo-4db_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-vertical-fill"} {...others} />);
}

export default Component;
