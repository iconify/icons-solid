import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu1rcw3ym.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wu1rcw3ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:customer-support-7-solid"} {...others} />);
}

export default Component;
