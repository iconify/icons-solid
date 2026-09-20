import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbem5n73m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lbem5n73m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:layout-11-bold"} {...others} />);
}

export default Component;
