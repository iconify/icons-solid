import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glk2itbjq.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="glk2itbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:caret-square-o-up"} {...others} />);
}

export default Component;
