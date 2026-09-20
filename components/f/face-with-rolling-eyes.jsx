import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/z/zc30hb6qo.css';
import '../../css/u/u-a82ollh.css';
import '../../css/k/ktu26ccqk.css';
import '../../css/r/rwlvcnttr.css';
import '../../css/k/k4z7zsbhp.css';
import '../../css/b/bqeqb10zf.css';
import '../../css/b/bau9cdw4f.css';
import '../../css/t/tpm0sob6i.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><circle class="zc30hb6qo"/><circle class="u-a82ollh"/><circle class="ktu26ccqk"/><circle class="rwlvcnttr"/><circle class="k4z7zsbhp"/><circle class="bqeqb10zf"/><circle class="bau9cdw4f"/><path class="tpm0sob6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-rolling-eyes"} {...others} />);
}

export default Component;
