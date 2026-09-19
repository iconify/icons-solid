import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emfgklaqt.css';
import '../../css/c/cvwa4ha8e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="emfgklaqt"/><path class="cvwa4ha8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-fork-filled"} {...others} />);
}

export default Component;
