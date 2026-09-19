import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v841rhb9t.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="v841rhb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:z-upper-case"} {...others} />);
}

export default Component;
