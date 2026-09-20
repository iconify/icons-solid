import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txzu4-dhd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txzu4-dhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:scan-fill"} {...others} />);
}

export default Component;
