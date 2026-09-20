import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8mn5qwgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8mn5qwgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:minimize-square-filled"} {...others} />);
}

export default Component;
