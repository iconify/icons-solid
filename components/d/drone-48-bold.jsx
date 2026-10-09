import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9t8vtbkq.css';
import '../../css/e/ehctdyb7u.css';
import '../../css/k/kirooxbcf.css';
import '../../css/t/tuxlwzigf.css';
import '../../css/y/y8bk7cxtz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j9t8vtbkq"/><path class="ehctdyb7u"/><path class="kirooxbcf"/><path class="tuxlwzigf"/><path class="y8bk7cxtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-48-bold"} {...others} />);
}

export default Component;
