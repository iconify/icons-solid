import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axe2cvbgc.css';
import '../../css/g/gyk-hu6jj.css';
import '../../css/k/kf-alwfzw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="axe2cvbgc"/><path class="gyk-hu6jj"/><path class="kf-alwfzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-ship-48-bold"} {...others} />);
}

export default Component;
