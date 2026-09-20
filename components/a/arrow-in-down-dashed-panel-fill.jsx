import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu20pdb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu20pdb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-down-dashed-panel-fill"} {...others} />);
}

export default Component;
