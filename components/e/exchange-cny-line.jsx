import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1idv1bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1idv1bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exchange-cny-line"} {...others} />);
}

export default Component;
