import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz9t_ne3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sz9t_ne3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:mail-send-email-message-solid"} {...others} />);
}

export default Component;
