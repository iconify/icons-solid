import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_tdqfbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_tdqfbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:driver2-filled"} {...others} />);
}

export default Component;
