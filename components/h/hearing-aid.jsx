import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bikzi3bkv.css';
import '../../css/l/l-d0mzbnh.css';
import '../../css/v/v45s4tbpx.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bikzi3bkv"/><path class="l-d0mzbnh"/><path class="v45s4tbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:hearing-aid"} {...others} />);
}

export default Component;
