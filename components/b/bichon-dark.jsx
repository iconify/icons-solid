import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaunbmwzy.css';
import '../../css/d/dsukp8ctc.css';
import '../../css/u/ubdlf3wbm.css';
import '../../css/l/l4hqxy0vi.css';
import '../../css/e/ee0qnmblt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yaunbmwzy"/><path class="dsukp8ctc"/><path class="ubdlf3wbm"/><path class="l4hqxy0vi"/><path class="ee0qnmblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bichon-dark"} {...others} />);
}

export default Component;
