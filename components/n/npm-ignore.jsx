import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvcq89ble.css';
import '../../css/g/gwcu8infc.css';
import '../../css/w/wnfssjrql.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cvcq89ble"><path class="gwcu8infc"/><path class="wnfssjrql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:npm-ignore"} {...others} />);
}

export default Component;
