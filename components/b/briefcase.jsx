import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kv_aefxvm.css';
import '../../css/n/now86q9wq.css';
import '../../css/d/dz18vobqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="kv_aefxvm"/><path class="now86q9wq"/><path class="dz18vobqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:briefcase"} {...others} />);
}

export default Component;
