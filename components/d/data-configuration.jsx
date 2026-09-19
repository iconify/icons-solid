import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp2mwbic.css';
import '../../css/b/bfjbko1wp.css';
import '../../css/i/i4ytxgbzl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyp2mwbic"/><path class="bfjbko1wp"/><path class="i4ytxgbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-configuration"} {...others} />);
}

export default Component;
