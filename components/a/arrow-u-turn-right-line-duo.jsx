import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y57400b9h.css';
import '../../css/b/bue-mrlhv.css';
import '../../css/v/v5wkezbbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y57400b9h"/><path class="bue-mrlhv"/><path class="v5wkezbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-u-turn-right-line-duo"} {...others} />);
}

export default Component;
