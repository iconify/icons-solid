import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3yk7pb8w.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="v3yk7pb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:mail"} {...others} />);
}

export default Component;
