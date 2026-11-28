import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flliqrb5c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2yzajopy.css';
import '../../css/o/o4mwbn_ua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flliqrb5c secondary"/><g class="dt0cm9dhy primary"><path class="a2yzajopy"/><path class="o4mwbn_ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:link-duo"} {...others} />);
}

export default Component;
