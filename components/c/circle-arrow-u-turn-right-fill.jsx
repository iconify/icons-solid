import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h53i5ibuf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h53i5ibuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-u-turn-right-fill"} {...others} />);
}

export default Component;
