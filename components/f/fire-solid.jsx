import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g41g3cfca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g41g3cfca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:fire-solid"} {...others} />);
}

export default Component;
