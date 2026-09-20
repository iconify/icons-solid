import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxflyccvw.css';
import '../../css/y/yaaczubzy.css';
import '../../css/l/lqz83fb4r.css';
import '../../css/f/fylw3m9-l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oxflyccvw"/><path class="yaaczubzy"/><path class="lqz83fb4r"/><path class="fylw3m9-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-forbiden-duo"} {...others} />);
}

export default Component;
