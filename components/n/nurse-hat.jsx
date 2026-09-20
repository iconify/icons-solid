import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8rbkbcqz.css';
import '../../css/v/v3o11fhkj.css';
import '../../css/b/bvadesb8y.css';
import '../../css/r/rng2dzt7g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x8rbkbcqz"/><path class="v3o11fhkj"/><path class="bvadesb8y"/><path class="rng2dzt7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:nurse-hat"} {...others} />);
}

export default Component;
