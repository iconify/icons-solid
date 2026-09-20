import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlqqhh01s.css';
import '../../css/h/hc8c75bqc.css';
import '../../css/a/agu5i8wku.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tlqqhh01s"/><path class="hc8c75bqc"/><path class="agu5i8wku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-heart-rounded-outline"} {...others} />);
}

export default Component;
