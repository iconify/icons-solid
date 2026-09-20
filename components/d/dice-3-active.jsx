import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5omho7-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g5omho7-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:dice-3-active"} {...others} />);
}

export default Component;
