import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt9xsy.css';
import '../../css/u/uh4u4q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt9xsy"/><circle class="uh4u4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch"} {...others} />);
}

export default Component;
