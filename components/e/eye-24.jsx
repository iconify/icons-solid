import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-s2teb4v.css';
import '../../css/g/g7z41b4ky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-s2teb4v"/><path clip-rule="evenodd" class="g7z41b4ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eye-24"} {...others} />);
}

export default Component;
