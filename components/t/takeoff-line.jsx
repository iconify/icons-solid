import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwxp84b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwxp84b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:takeoff-line"} {...others} />);
}

export default Component;
