import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/st73rhb9v.css';
import '../../css/o/oyz7n0e7y.css';
import '../../css/q/qlu55sb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="st73rhb9v"/><rect class="oyz7n0e7y"/><rect class="qlu55sb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:error-400"} {...others} />);
}

export default Component;
