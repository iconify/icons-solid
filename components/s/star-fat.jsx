import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w35xc6b7d.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="w35xc6b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:star-fat"} {...others} />);
}

export default Component;
