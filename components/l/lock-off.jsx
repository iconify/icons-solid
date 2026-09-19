import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o9lb95bos.css';
import '../../css/x/xaw0nda2s.css';
import '../../css/f/fsfedvbef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="o9lb95bos"/><path class="xaw0nda2s"/><path class="fsfedvbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:lock-off"} {...others} />);
}

export default Component;
