import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngt43k2ft.css';
import '../../css/h/hi1o7nsyr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ngt43k2ft"/><path class="hi1o7nsyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pin"} {...others} />);
}

export default Component;
