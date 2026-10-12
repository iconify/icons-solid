import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxtw1bc7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxtw1bc7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-uyu"} {...others} />);
}

export default Component;
