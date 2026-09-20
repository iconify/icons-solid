import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf_5pebtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf_5pebtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:medical-cotton-swab"} {...others} />);
}

export default Component;
