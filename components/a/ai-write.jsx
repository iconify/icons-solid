import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-7lzdbyj.css';
import '../../css/a/assf6sbkp.css';
import '../../css/u/ua6v0j9ye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m-7lzdbyj"/><path class="assf6sbkp"/><path class="ua6v0j9ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-write"} {...others} />);
}

export default Component;
