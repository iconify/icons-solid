import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okk6ekkxa.css';

const viewBox = {"width":1408,"height":1280};
const content = `<path class="okk6ekkxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:ellipsis-h"} {...others} />);
}

export default Component;
