import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e44evsbca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e44evsbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:user-check-filled"} {...others} />);
}

export default Component;
