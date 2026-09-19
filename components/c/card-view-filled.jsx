import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fepn_rb5k.css';
import '../../css/n/nq5_ejy6s.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="fepn_rb5k"/><path class="nq5_ejy6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:card-view-filled"} {...others} />);
}

export default Component;
