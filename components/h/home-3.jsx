import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kxx5_xb1a.css';
import '../../css/a/affg4izcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kxx5_xb1a"/><path class="affg4izcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-3"} {...others} />);
}

export default Component;
