import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv41ofcxd.css';
import '../../css/b/bvlph1xti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv41ofcxd"/><path class="bvlph1xti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cut"} {...others} />);
}

export default Component;
