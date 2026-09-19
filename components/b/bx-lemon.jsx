import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn_saxb8w.css';
import '../../css/b/bkpxyzsbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn_saxb8w"/><path class="bkpxyzsbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-lemon"} {...others} />);
}

export default Component;
