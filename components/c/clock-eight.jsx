import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgja8vbbk.css';
import '../../css/i/ixpwojbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgja8vbbk"/><path class="ixpwojbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-eight"} {...others} />);
}

export default Component;
