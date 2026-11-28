import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz-mjf2ti.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrlcqkbbd.css';
import '../../css/r/rxubgwwby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sz-mjf2ti"/><g class="dt0cm9dhy primary"><path class="wrlcqkbbd"/><path class="rxubgwwby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tv-minimal-duo"} {...others} />);
}

export default Component;
