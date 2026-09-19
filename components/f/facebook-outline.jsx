import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_6ah42xi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n_6ah42xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:facebook-outline"} {...others} />);
}

export default Component;
