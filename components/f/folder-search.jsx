import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sqmbsu6jh.css';
import '../../css/o/oj7oldkqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sqmbsu6jh"/><path class="oj7oldkqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-search"} {...others} />);
}

export default Component;
