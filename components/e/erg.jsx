import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdg6dzb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rdg6dzb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:erg"} {...others} />);
}

export default Component;
