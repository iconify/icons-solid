import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi373glwj.css';
import '../../css/u/u68wxibuh.css';
import '../../css/z/z64d1ab0c.css';
import '../../css/r/rl82fg4sr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi373glwj"/><path class="u68wxibuh"/><path class="z64d1ab0c"/><path class="rl82fg4sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-bold"} {...others} />);
}

export default Component;
