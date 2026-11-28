import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktq1g1b0a.css';
import '../../css/a/ajv3mbcxk.css';
import '../../css/s/sn58eibwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ktq1g1b0a"/><path class="ajv3mbcxk"/><path class="sn58eibwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:battery-medium"} {...others} />);
}

export default Component;
