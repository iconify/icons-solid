import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4ir8ob_w.css';
import '../../css/t/tsou7sbms.css';
import '../../css/u/uzxwg9bba.css';
import '../../css/g/g4ssyewpa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4ir8ob_w"/><path class="tsou7sbms"/><path class="uzxwg9bba"/><path class="g4ssyewpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-calendar"} {...others} />);
}

export default Component;
