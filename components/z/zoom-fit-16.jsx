import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maluy0b6u.css';
import '../../css/g/gkvzxjbxs.css';
import '../../css/w/wvpuz6bnr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="maluy0b6u"/><path clip-rule="evenodd" class="gkvzxjbxs"/><path class="wvpuz6bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:zoom-fit-16"} {...others} />);
}

export default Component;
