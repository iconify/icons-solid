import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f54qbyb0o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ie4ua51pd.css';
import '../../css/b/bo45-obwu.css';
import '../../css/m/m114rjv8a.css';
import '../../css/g/gwy80eb0w.css';
import '../../css/q/q60ma8sjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f54qbyb0o secondary"/><g class="dt0cm9dhy primary"><path class="ie4ua51pd"/><path class="bo45-obwu"/><path class="m114rjv8a"/><path class="gwy80eb0w"/><path class="q60ma8sjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:barbell-duo"} {...others} />);
}

export default Component;
