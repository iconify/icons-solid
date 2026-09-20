import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2v7vnbnn.css';
import '../../css/y/yunb_lbwv.css';
import '../../css/y/yx381rqgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n2v7vnbnn"/><path clip-rule="evenodd" class="yunb_lbwv"/><path class="yx381rqgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:login-logout-key"} {...others} />);
}

export default Component;
