import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qycm1k8wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qycm1k8wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bluetooth-wave"} {...others} />);
}

export default Component;
