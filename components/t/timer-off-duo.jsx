import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-99qbx0l.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/k55be6yhw.css';
import '../../css/c/ck-4ht99s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a-99qbx0l"/><path class="qr4ochb5c wm-s"/><path class="k55be6yhw"/><path class="ck-4ht99s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-off-duo"} {...others} />);
}

export default Component;
