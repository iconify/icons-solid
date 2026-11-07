import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl4lbdb9f.css';
import '../../css/g/g1x_1bbut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl4lbdb9f"/><path class="g1x_1bbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-outline"} {...others} />);
}

export default Component;
