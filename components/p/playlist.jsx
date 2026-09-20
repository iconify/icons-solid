import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/banko5b2z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="banko5b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:playlist"} {...others} />);
}

export default Component;
