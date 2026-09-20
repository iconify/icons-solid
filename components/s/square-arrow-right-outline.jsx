import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk7_6xv2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lk7_6xv2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-right-outline"} {...others} />);
}

export default Component;
