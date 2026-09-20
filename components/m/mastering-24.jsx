import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg372g3ed.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yg372g3ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mastering-24"} {...others} />);
}

export default Component;
