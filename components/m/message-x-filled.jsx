import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at7kl5b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="at7kl5b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-x-filled"} {...others} />);
}

export default Component;
