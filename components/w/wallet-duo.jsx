import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slrdzkgzy.css';
import '../../css/k/kbxro98gm.css';
import '../../css/a/as3krbbzb.css';
import '../../css/a/ax-9akbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="slrdzkgzy"/><path class="kbxro98gm wm-a"/><path class="as3krbbzb"/><path class="ax-9akbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wallet-duo"} {...others} />);
}

export default Component;
