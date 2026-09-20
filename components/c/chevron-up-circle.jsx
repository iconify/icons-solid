import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nvmku41bq.css';
import '../../css/s/seygw-57p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nvmku41bq"/><path class="seygw-57p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chevron-up-circle"} {...others} />);
}

export default Component;
