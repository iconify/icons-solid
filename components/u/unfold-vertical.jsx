import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzkly3sbo.css';
import '../../css/w/w9rxeebaz.css';
import '../../css/f/fof5_7bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yzkly3sbo"/><path class="w9rxeebaz"/><path class="fof5_7bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:unfold-vertical"} {...others} />);
}

export default Component;
