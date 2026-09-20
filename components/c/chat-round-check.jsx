import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pezr6bbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pezr6bbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-round-check"} {...others} />);
}

export default Component;
