import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/asa01hbws.css';
import '../../css/e/et-ay3bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="asa01hbws"/><path class="et-ay3bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delete-put-back"} {...others} />);
}

export default Component;
