import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syehdcb-y.css';
import '../../css/l/lv_77yb9s.css';
import '../../css/c/ceo0kmpvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="syehdcb-y wm-a"/><path class="lv_77yb9s wm-a"/><path class="ceo0kmpvt wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-sun"} {...others} />);
}

export default Component;
