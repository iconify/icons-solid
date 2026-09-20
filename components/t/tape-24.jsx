import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcazjrb0e.css';
import '../../css/c/c_yj0tdow.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zcazjrb0e"/><path clip-rule="evenodd" class="c_yj0tdow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:tape-24"} {...others} />);
}

export default Component;
