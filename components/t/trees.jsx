import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbdv4-s3k.css';
import '../../css/i/imsm6rm0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dbdv4-s3k"/><path class="imsm6rm0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:trees"} {...others} />);
}

export default Component;
