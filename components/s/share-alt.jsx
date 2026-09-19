import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwc9hobsp.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="qwc9hobsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:share-alt"} {...others} />);
}

export default Component;
