import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl6m2oa_c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xl6m2oa_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bluetooth-searching"} {...others} />);
}

export default Component;
