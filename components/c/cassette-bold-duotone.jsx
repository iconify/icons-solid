import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geoim1bqf.css';
import '../../css/g/gj0fhibpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="geoim1bqf"/><path clip-rule="evenodd" class="gj0fhibpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-bold-duotone"} {...others} />);
}

export default Component;
