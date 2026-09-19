import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4utkdd9g.css';
import '../../css/r/r9wf1hbpk.css';
import '../../css/s/sa3sebesr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x4utkdd9g"/><path class="r9wf1hbpk"/><path class="sa3sebesr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:video-camera-add-outlined"} {...others} />);
}

export default Component;
