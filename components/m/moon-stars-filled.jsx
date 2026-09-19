import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2qd5b7pd.css';
import '../../css/a/abf4dkbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2qd5b7pd"/><path class="abf4dkbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-stars-filled"} {...others} />);
}

export default Component;
