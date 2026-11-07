import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2dvf4bly.css';
import '../../css/v/vu18-_bab.css';
import '../../css/q/q_81dnb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2dvf4bly"/><path class="vu18-_bab"/><path clip-rule="evenodd" class="q_81dnb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-outline"} {...others} />);
}

export default Component;
