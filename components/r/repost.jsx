import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/thziqe0rq.css';
import '../../css/r/rxf0dn-2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="thziqe0rq"/><path class="rxf0dn-2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:repost"} {...others} />);
}

export default Component;
