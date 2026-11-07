import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5sw_jabn.css';
import '../../css/y/yrd2shbbf.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5sw_jabn"/><path class="yrd2shbbf"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-warning-outline"} {...others} />);
}

export default Component;
