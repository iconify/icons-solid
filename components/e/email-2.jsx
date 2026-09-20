import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/d/dbs6jgbzz.css';
import '../../css/f/f3gccjkuv.css';
import '../../css/g/g55iq_ryj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="dbs6jgbzz"/><path class="f3gccjkuv"/><path class="g55iq_ryj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:email-2"} {...others} />);
}

export default Component;
