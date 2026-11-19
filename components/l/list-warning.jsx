import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvaktp_-u.css';
import '../../css/n/n-vi0fb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rvaktp_-u"/><path class="n-vi0fb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-warning"} {...others} />);
}

export default Component;
