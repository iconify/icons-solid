import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmvk_ntlm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmvk_ntlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:craft-cms"} {...others} />);
}

export default Component;
