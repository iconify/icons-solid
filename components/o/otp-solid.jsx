import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyystr3mw.css';
import '../../css/k/ko29mcbdr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hyystr3mw"/><path clip-rule="evenodd" class="ko29mcbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:otp-solid"} {...others} />);
}

export default Component;
