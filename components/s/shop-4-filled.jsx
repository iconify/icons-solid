import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok2n7cp7w.css';
import '../../css/w/wus1oo58n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok2n7cp7w"/><path class="wus1oo58n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-4-filled"} {...others} />);
}

export default Component;
