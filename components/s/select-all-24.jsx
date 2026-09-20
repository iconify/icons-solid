import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgp3--bdz.css';
import '../../css/v/v_mxp4bup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgp3--bdz"/><path clip-rule="evenodd" class="v_mxp4bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:select-all-24"} {...others} />);
}

export default Component;
