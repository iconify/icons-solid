import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky6edpbsi.css';
import '../../css/i/i6kkc5sfl.css';
import '../../css/w/wcscpib-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky6edpbsi"/><path class="i6kkc5sfl"/><path class="wcscpib-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:database-bold"} {...others} />);
}

export default Component;
