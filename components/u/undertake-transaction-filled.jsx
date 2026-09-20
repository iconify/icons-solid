import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj6brm96n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj6brm96n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:undertake-transaction-filled"} {...others} />);
}

export default Component;
