import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uedtu89cj.css';
import '../../css/b/b2m7ke2wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uedtu89cj"/><path class="b2m7ke2wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:conversation"} {...others} />);
}

export default Component;
