import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1ctc1phm.css';
import '../../css/y/ypchirliy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1ctc1phm"/><path class="ypchirliy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fluid-light"} {...others} />);
}

export default Component;
