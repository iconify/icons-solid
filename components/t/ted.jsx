import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igt75mb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igt75mb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:ted"} {...others} />);
}

export default Component;
