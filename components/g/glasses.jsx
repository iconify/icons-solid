import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elsqzx2dw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elsqzx2dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:glasses"} {...others} />);
}

export default Component;
