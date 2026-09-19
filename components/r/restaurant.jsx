import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osz9gpblp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osz9gpblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:restaurant"} {...others} />);
}

export default Component;
