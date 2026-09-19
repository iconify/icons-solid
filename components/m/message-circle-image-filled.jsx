import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upt-3cclz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="upt-3cclz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-image-filled"} {...others} />);
}

export default Component;
