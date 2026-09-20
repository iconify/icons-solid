import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kykpw0ngx.css';
import '../../css/y/ydrr9492q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kykpw0ngx"/><path class="ydrr9492q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-forward-up"} {...others} />);
}

export default Component;
