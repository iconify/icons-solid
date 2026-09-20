import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iknetdbmw.css';
import '../../css/u/umgeii-gz.css';
import '../../css/f/ffr77i4rv.css';
import '../../css/z/z6s47uthj.css';
import '../../css/s/scfhkubuq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="iknetdbmw"/><path class="umgeii-gz"/><path class="ffr77i4rv"/><path class="z6s47uthj"/><path class="scfhkubuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-square-button"} {...others} />);
}

export default Component;
