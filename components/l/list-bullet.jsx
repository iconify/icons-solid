import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr7_cdb4b.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="qr7_cdb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:list-bullet"} {...others} />);
}

export default Component;
