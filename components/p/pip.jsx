import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgts3ebcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fgts3ebcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pip"} {...others} />);
}

export default Component;
