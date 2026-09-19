import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1o5_0ddl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i1o5_0ddl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:inbox-out-filled"} {...others} />);
}

export default Component;
