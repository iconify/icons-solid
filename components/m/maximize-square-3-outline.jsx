import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhh-lmb1b.css';
import '../../css/w/wioqj5bua.css';
import '../../css/r/ru5wvccub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vhh-lmb1b"/><path class="wioqj5bua"/><path clip-rule="evenodd" class="ru5wvccub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-3-outline"} {...others} />);
}

export default Component;
