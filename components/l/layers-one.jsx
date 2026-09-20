import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bey4ik7pc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bey4ik7pc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:layers-one"} {...others} />);
}

export default Component;
