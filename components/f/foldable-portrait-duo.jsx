import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs928tblh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ab8846b-o.css';
import '../../css/y/yahd9lb9e.css';
import '../../css/j/j8bxxx5do.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs928tblh secondary"/><g class="dt0cm9dhy primary"><path class="ab8846b-o"/><path class="yahd9lb9e"/><path class="j8bxxx5do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-portrait-duo"} {...others} />);
}

export default Component;
