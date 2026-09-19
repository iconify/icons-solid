import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii_1hrz-r.css';

const viewBox = {"width":986,"height":1000};
const content = `<path class="ii_1hrz-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:win8"} {...others} />);
}

export default Component;
