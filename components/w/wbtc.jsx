import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq8hp2o_x.css';
import '../../css/o/o3ulf3bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yq8hp2o_x"/><path class="o3ulf3bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wbtc"} {...others} />);
}

export default Component;
