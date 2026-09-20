import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0r4ybbif.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i0r4ybbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:dimond-alt-fill"} {...others} />);
}

export default Component;
