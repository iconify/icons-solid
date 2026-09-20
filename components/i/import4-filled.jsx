import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/une53x_rg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="une53x_rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:import4-filled"} {...others} />);
}

export default Component;
