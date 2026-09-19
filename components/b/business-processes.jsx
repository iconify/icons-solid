import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzx2o7b_o.css';
import '../../css/m/mp-vwcv-r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vzx2o7b_o"/><path class="mp-vwcv-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:business-processes"} {...others} />);
}

export default Component;
