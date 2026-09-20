import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbesepbqw.css';
import '../../css/a/aa14-bs7a.css';
import '../../css/r/rsdomq64f.css';
import '../../css/v/vl4gw6bcj.css';
import '../../css/f/fierqtjvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cbesepbqw"/><path class="aa14-bs7a"/><path class="rsdomq64f"/><path class="vl4gw6bcj"/><path class="fierqtjvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ecox"} {...others} />);
}

export default Component;
