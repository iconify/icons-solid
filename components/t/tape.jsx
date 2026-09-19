import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr44fb1gq.css';
import '../../css/n/n9mo1oxei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr44fb1gq"/><path class="n9mo1oxei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tape"} {...others} />);
}

export default Component;
