import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdtxb_m1s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pdtxb_m1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:backward-step-fill"} {...others} />);
}

export default Component;
