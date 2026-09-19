import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpe1df_uk.css';
import '../../css/q/q94q71bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpe1df_uk"/><path class="q94q71bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:slider-alt"} {...others} />);
}

export default Component;
