import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0bz8sb9m.css';
import '../../css/r/rs6irjb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0bz8sb9m"/><path class="rs6irjb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:check-circle"} {...others} />);
}

export default Component;
