import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1xy6nh9u.css';
import '../../css/b/b8gjdvb7r.css';
import '../../css/h/hux66ibbx.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n1xy6nh9u"/><path class="b8gjdvb7r"/><path class="hux66ibbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:station"} {...others} />);
}

export default Component;
