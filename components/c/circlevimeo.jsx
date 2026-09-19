import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk9jk_8nt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hk9jk_8nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlevimeo"} {...others} />);
}

export default Component;
