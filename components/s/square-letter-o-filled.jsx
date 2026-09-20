import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2mk53bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2mk53bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-letter-o-filled"} {...others} />);
}

export default Component;
