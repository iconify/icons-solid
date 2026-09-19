import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxsb6gbnq.css';
import '../../css/k/kz_eqvbal.css';
import '../../css/x/xrkhp3vin.css';
import '../../css/s/sx5kics6n.css';
import '../../css/z/zsl1wsy_w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zxsb6gbnq"/><path class="kz_eqvbal"/><path class="xrkhp3vin"/><path class="sx5kics6n"/><path class="zsl1wsy_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pouting-cat"} {...others} />);
}

export default Component;
