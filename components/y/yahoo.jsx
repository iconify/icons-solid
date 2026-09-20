import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdgwk2z5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdgwk2z5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:yahoo"} {...others} />);
}

export default Component;
