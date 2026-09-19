import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meh6rwzlz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="meh6rwzlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:watch-outline"} {...others} />);
}

export default Component;
