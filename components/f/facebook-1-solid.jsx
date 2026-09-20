import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3cwk-ews.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n3cwk-ews"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:facebook-1-solid"} {...others} />);
}

export default Component;
