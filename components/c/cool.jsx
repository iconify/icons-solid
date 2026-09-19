import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms1t--bpr.css';
import '../../css/h/h9o6htbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms1t--bpr"/><path class="h9o6htbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cool"} {...others} />);
}

export default Component;
