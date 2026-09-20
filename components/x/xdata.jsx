import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmvuycbnv.css';
import '../../css/o/o5qevobsp.css';
import '../../css/b/badrgubuy.css';
import '../../css/w/wwo15zgqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmvuycbnv"/><path class="o5qevobsp"/><path class="badrgubuy"/><path class="wwo15zgqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xdata"} {...others} />);
}

export default Component;
