import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrt0pxbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrt0pxbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:stack-overflow-fill"} {...others} />);
}

export default Component;
