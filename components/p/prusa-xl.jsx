import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzr_c-blw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fzr_c-blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:prusa-xl"} {...others} />);
}

export default Component;
