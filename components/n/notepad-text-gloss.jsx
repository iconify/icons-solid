import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aribzxb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aribzxb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notepad-text-gloss"} {...others} />);
}

export default Component;
