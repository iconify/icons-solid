import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvlgxcc0y.css';
import '../../css/k/kzq8r7vcj.css';
import '../../css/i/ie_i89bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dvlgxcc0y"/><path class="kzq8r7vcj"/><path clip-rule="evenodd" class="ie_i89bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-rounded-outline"} {...others} />);
}

export default Component;
