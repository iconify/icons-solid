import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aamnv1bne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aamnv1bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:msg-writing-filled"} {...others} />);
}

export default Component;
