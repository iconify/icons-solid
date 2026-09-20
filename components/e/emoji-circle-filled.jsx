import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j58-_kbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j58-_kbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:emoji-circle-filled"} {...others} />);
}

export default Component;
