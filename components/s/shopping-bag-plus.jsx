import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxgrj4bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxgrj4bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shopping-bag-plus"} {...others} />);
}

export default Component;
