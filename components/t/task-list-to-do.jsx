import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktib8bc0r.css';
import '../../css/y/yritneboz.css';
import '../../css/e/eizmfdbvz.css';
import '../../css/x/xnn95pq6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktib8bc0r"/><path class="yritneboz"/><path class="eizmfdbvz"/><path class="xnn95pq6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:task-list-to-do"} {...others} />);
}

export default Component;
