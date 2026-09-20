import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drare1bjj.css';
import '../../css/z/zyog8pxnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drare1bjj"/><path clip-rule="evenodd" class="zyog8pxnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:telegram"} {...others} />);
}

export default Component;
