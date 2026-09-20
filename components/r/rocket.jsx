import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpdbnghdn.css';
import '../../css/w/wv9ep6bap.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hpdbnghdn"/><path class="wv9ep6bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rocket"} {...others} />);
}

export default Component;
