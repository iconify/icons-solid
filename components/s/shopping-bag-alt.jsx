import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev7a6mbod.css';
import '../../css/h/hvelf-bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ev7a6mbod"/><path class="hvelf-bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shopping-bag-alt"} {...others} />);
}

export default Component;
