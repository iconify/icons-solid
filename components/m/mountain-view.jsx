import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l03ivrben.css';
import '../../css/w/wlmt3rjgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l03ivrben"/><path class="wlmt3rjgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mountain-view"} {...others} />);
}

export default Component;
