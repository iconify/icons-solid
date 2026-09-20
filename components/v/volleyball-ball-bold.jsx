import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifygpy9ra.css';
import '../../css/u/u5pn5hbvi.css';
import '../../css/g/gtf-_j63i.css';
import '../../css/k/kkf6gcoeg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifygpy9ra"/><path class="u5pn5hbvi"/><path class="gtf-_j63i"/><path class="kkf6gcoeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:volleyball-ball-bold"} {...others} />);
}

export default Component;
