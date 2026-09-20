import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy1nasb1l.css';
import '../../css/f/fpys2ac3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yy1nasb1l"/><path class="fpys2ac3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:xampp"} {...others} />);
}

export default Component;
