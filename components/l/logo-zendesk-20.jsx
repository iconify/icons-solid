import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prmo7j36x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prmo7j36x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-zendesk-20"} {...others} />);
}

export default Component;
