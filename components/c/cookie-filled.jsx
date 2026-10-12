import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz3abnbbb.css';
import '../../css/y/y1iswdb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gz3abnbbb"/><path class="y1iswdb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cookie-filled"} {...others} />);
}

export default Component;
