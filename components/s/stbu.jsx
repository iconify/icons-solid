import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-jwkb3l.css';
import '../../css/a/ackwpdbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx-jwkb3l"/><path class="ackwpdbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:stbu"} {...others} />);
}

export default Component;
