import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2muvqext.css';

const viewBox = {"width":832,"height":1024};
const content = `<path class="x2muvqext"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:boxtrapper"} {...others} />);
}

export default Component;
