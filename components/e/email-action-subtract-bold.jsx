import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6cqwsbin.css';
import '../../css/b/bfi2tqb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6cqwsbin"/><path class="bfi2tqb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-subtract-bold"} {...others} />);
}

export default Component;
