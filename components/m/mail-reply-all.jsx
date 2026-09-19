import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay1xdy5oo.css';

const viewBox = {"width":1792,"height":1600};
const content = `<path class="ay1xdy5oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:mail-reply-all"} {...others} />);
}

export default Component;
