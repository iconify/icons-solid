import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0z_ntb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0z_ntb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:align-objects-right"} {...others} />);
}

export default Component;
