import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lskr6z3ls.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9skr0b7y.css';
import '../../css/j/j8p3ievks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lskr6z3ls secondary"/><g class="dt0cm9dhy primary"><path class="n9skr0b7y"/><path class="j8p3ievks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plane-off-duo"} {...others} />);
}

export default Component;
