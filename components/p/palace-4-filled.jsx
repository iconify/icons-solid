import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm9y4iblw.css';
import '../../css/z/zkrbon-zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vm9y4iblw"/><path class="zkrbon-zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-4-filled"} {...others} />);
}

export default Component;
