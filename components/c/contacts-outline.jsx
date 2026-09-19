import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td89tqozp.css';
import '../../css/c/cdxiukj0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td89tqozp"/><path clip-rule="evenodd" class="cdxiukj0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:contacts-outline"} {...others} />);
}

export default Component;
