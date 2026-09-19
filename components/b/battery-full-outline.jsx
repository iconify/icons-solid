import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjpbc1c8o.css';
import '../../css/m/mthptgvbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjpbc1c8o"/><path clip-rule="evenodd" class="mthptgvbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:battery-full-outline"} {...others} />);
}

export default Component;
