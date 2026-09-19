import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td2qqkb6u.css';
import '../../css/w/w6198jjkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td2qqkb6u"/><path class="w6198jjkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-barcode-reader"} {...others} />);
}

export default Component;
