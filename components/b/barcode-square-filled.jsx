import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoadq4yvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yoadq4yvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:barcode-square-filled"} {...others} />);
}

export default Component;
