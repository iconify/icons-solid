import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utn616bjj.css';
import '../../css/x/xcd7v-s4w.css';
import '../../css/r/ryypy5fhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="utn616bjj"/><path class="xcd7v-s4w"/><path clip-rule="evenodd" class="ryypy5fhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:party-popper-flat"} {...others} />);
}

export default Component;
