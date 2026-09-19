import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eboq2oy7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eboq2oy7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-left-circle-filled"} {...others} />);
}

export default Component;
