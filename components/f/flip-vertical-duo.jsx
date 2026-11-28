import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsmzknb_t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zjy7hntji.css';
import '../../css/m/m2hacq_bi.css';
import '../../css/g/g9z927bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wsmzknb_t"/><g class="dt0cm9dhy primary"><path class="zjy7hntji"/><path class="m2hacq_bi"/><path class="g9z927bqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flip-vertical-duo"} {...others} />);
}

export default Component;
