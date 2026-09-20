import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1xyw2e6j.css';
import '../../css/q/qi-a3ui-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1xyw2e6j"/><path class="qi-a3ui-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:handy"} {...others} />);
}

export default Component;
