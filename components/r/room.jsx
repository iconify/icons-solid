import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2keqxlad.css';
import '../../css/c/cbeuwxbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2keqxlad"/><path class="cbeuwxbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:room"} {...others} />);
}

export default Component;
