import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntwgq1b2y.css';
import '../../css/y/yib8xibaw.css';
import '../../css/w/wrbn_p02x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntwgq1b2y"/><path class="yib8xibaw"/><path clip-rule="evenodd" class="wrbn_p02x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-left-bold"} {...others} />);
}

export default Component;
