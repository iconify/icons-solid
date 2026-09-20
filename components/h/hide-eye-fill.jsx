import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue2y6hb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ue2y6hb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:hide-eye-fill"} {...others} />);
}

export default Component;
