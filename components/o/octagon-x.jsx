import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bw2e53iyy.css';
import '../../css/m/mnowo9bkj.css';
import '../../css/v/v1--xxbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="bw2e53iyy"/><path class="mnowo9bkj"/><path class="v1--xxbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:octagon-x"} {...others} />);
}

export default Component;
