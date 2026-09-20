import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2v1743-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2v1743-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-keyhole-open-filled"} {...others} />);
}

export default Component;
