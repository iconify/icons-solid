import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i--8q1bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i--8q1bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-fill"} {...others} />);
}

export default Component;
