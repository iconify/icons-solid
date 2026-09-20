import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7ky6prup.css';
import '../../css/z/zjsg5fbvy.css';
import '../../css/e/etjyq4qct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k7ky6prup"/><path class="zjsg5fbvy"/><path class="etjyq4qct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:edit"} {...others} />);
}

export default Component;
