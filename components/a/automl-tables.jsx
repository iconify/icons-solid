import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8wg0cc7n.css';
import '../../css/r/r_s901bbt.css';
import '../../css/y/yp1ozz1bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8wg0cc7n"/><path class="r_s901bbt"/><path class="yp1ozz1bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:automl-tables"} {...others} />);
}

export default Component;
