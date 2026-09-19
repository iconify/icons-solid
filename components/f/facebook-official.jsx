import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne73j3bjb.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="ne73j3bjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:facebook-official"} {...others} />);
}

export default Component;
