import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8xv77byg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8xv77byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:direct-up-filled"} {...others} />);
}

export default Component;
