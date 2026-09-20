import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz335zj5g.css';
import '../../css/u/ux2qx_n6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bz335zj5g"/><path class="ux2qx_n6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:sound-on-solid"} {...others} />);
}

export default Component;
