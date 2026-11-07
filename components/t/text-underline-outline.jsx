import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_uvt8bwv.css';
import '../../css/m/mdftclbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_uvt8bwv"/><path class="mdftclbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-outline"} {...others} />);
}

export default Component;
