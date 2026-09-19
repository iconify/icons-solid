import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9f5b6tbj.css';
import '../../css/r/r6aez23ym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9f5b6tbj"/><path class="r6aez23ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:alarm-exclamation"} {...others} />);
}

export default Component;
