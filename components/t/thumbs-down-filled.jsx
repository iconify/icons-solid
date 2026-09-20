import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy4-bn.css';
import '../../css/t/t7y_kz.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zy4-bn"/><path class="t7y_kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:thumbs-down-filled"} {...others} />);
}

export default Component;
