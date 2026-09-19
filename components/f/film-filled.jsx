import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozb0_ubof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozb0_ubof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:film-filled"} {...others} />);
}

export default Component;
