import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_w-hxjse.css';
import '../../css/z/zbx9303xv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_w-hxjse"/><path class="zbx9303xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bug-solid"} {...others} />);
}

export default Component;
