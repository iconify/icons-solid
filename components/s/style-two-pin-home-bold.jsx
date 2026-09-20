import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuxo34wrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuxo34wrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-two-pin-home-bold"} {...others} />);
}

export default Component;
