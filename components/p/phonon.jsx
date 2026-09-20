import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jakgx-bvd.css';
import '../../css/j/jzt-i4bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jakgx-bvd"/><path class="jzt-i4bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:phonon"} {...others} />);
}

export default Component;
