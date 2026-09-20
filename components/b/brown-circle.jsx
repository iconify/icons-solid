import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ika2pmy3d.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="ika2pmy3d"/><circle class="snpiwsb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:brown-circle"} {...others} />);
}

export default Component;
