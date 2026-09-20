import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brj23qz8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brj23qz8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-up2-filled"} {...others} />);
}

export default Component;
