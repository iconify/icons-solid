import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq7v8iwzd.css';

const viewBox = {"width":1536,"height":1504};
const content = `<path class="qq7v8iwzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:linkedin"} {...others} />);
}

export default Component;
