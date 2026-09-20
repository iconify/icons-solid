import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghj6zeexj.css';
import '../../css/i/i1rnhy3qh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghj6zeexj"/><path class="i1rnhy3qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coin-purse-1-bold"} {...others} />);
}

export default Component;
