import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6ccxni9z.css';
import '../../css/i/iz9zsdbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6ccxni9z"/><path class="iz9zsdbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:money-withdraw"} {...others} />);
}

export default Component;
