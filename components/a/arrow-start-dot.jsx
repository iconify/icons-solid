import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvnfzqq6y.css';
import '../../css/s/s6wz7jb9u.css';
import '../../css/v/vo-75nb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dvnfzqq6y"/><path class="s6wz7jb9u"/><path class="vo-75nb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-start-dot"} {...others} />);
}

export default Component;
