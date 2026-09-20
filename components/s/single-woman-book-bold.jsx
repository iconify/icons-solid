import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfra_acnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vfra_acnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-woman-book-bold"} {...others} />);
}

export default Component;
