import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x19_ekbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x19_ekbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-linear"} {...others} />);
}

export default Component;
