import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-tedebsj.css';
import '../../css/t/tp-8ulbds.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="m-tedebsj"/><path class="tp-8ulbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-no-smoking"} {...others} />);
}

export default Component;
