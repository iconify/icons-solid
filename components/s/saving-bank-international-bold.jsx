import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5bgg0b-d.css';
import '../../css/c/cyspyob_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5bgg0b-d"/><path class="cyspyob_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-bank-international-bold"} {...others} />);
}

export default Component;
