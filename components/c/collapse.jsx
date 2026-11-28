import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d3--f9bxt.css';
import '../../css/l/l6185mb2v.css';
import '../../css/s/ssxb6oabf.css';
import '../../css/a/a7exq6baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d3--f9bxt"/><path class="l6185mb2v"/><path class="ssxb6oabf"/><path class="a7exq6baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:collapse"} {...others} />);
}

export default Component;
