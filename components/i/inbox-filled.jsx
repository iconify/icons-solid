import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn02wb0-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pn02wb0-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:inbox-filled"} {...others} />);
}

export default Component;
