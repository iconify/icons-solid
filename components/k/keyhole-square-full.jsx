import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqbu23bhp.css';
import '../../css/j/jzxkqkebs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rqbu23bhp"/><path class="jzxkqkebs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:keyhole-square-full"} {...others} />);
}

export default Component;
