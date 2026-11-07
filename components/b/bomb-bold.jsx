import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubrgnsref.css';
import '../../css/x/xl-jarb6g.css';
import '../../css/p/p8b3qu2bi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubrgnsref"/><path class="xl-jarb6g"/><path class="p8b3qu2bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-bold"} {...others} />);
}

export default Component;
