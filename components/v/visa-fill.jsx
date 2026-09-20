import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyz0-nt_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tyz0-nt_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:visa-fill"} {...others} />);
}

export default Component;
