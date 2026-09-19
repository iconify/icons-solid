import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br6gkkbnm.css';
import '../../css/y/y8r8-nbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="br6gkkbnm"/><path clip-rule="evenodd" class="y8r8-nbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:printer-outline"} {...others} />);
}

export default Component;
