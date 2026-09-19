import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2sfl7j_p.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="c2sfl7j_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:smile-o"} {...others} />);
}

export default Component;
