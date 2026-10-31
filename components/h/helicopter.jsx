import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n6kzxybhe.css';
import '../../css/v/v288rybnp.css';
import '../../css/t/taunc0bck.css';
import '../../css/n/n3cchvypm.css';
import '../../css/m/m_bt1uqgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n6kzxybhe wm-shadow"/><path class="v288rybnp"/><path class="taunc0bck"/><path class="n3cchvypm"/><path class="m_bt1uqgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:helicopter"} {...others} />);
}

export default Component;
