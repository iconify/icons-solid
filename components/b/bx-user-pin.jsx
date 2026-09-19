import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a52c-wxdw.css';
import '../../css/l/lgn49_byf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a52c-wxdw"/><path class="lgn49_byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-user-pin"} {...others} />);
}

export default Component;
