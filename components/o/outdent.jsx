import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0lgx_3bc.css';
import '../../css/d/dh1xuibar.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="c0lgx_3bc"/><path clip-rule="evenodd" class="dh1xuibar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:outdent"} {...others} />);
}

export default Component;
