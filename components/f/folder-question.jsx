import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwvo5fb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwvo5fb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:folder-question"} {...others} />);
}

export default Component;
