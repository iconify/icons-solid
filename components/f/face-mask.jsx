import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqbn4acve.css';
import '../../css/p/pjyeu65td.css';
import '../../css/h/hcj6o-bax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqbn4acve"/><circle class="pjyeu65td"/><circle class="hcj6o-bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:face-mask"} {...others} />);
}

export default Component;
