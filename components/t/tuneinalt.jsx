import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb7u_8b3m.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="bb7u_8b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tuneinalt"} {...others} />);
}

export default Component;
