import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo9n361qe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo9n361qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-top-close-fill"} {...others} />);
}

export default Component;
