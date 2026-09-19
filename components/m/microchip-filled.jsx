import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh60aydpi.css';
import '../../css/v/v_2n0eezf.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="fh60aydpi"/><path class="v_2n0eezf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microchip-filled"} {...others} />);
}

export default Component;
