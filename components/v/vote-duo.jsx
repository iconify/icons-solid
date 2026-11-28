import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz--dybeb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzkpl7bps.css';
import '../../css/p/p9wysibpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zz--dybeb"/><g class="dt0cm9dhy primary"><path class="dzkpl7bps"/><path class="p9wysibpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vote-duo"} {...others} />);
}

export default Component;
