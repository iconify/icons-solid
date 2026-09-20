import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xibuolb2y.css';
import '../../css/c/c85egjb-l.css';
import '../../css/a/ap9enlbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xibuolb2y"/><path class="c85egjb-l"/><path class="ap9enlbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gem-sparkle"} {...others} />);
}

export default Component;
