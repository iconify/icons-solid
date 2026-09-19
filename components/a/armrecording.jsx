import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-efg3ywk.css';

const viewBox = {"width":256,"height":256};
const content = `<circle class="b-efg3ywk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:armrecording"} {...others} />);
}

export default Component;
