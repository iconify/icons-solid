import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrnllbmrd.css';
import '../../css/n/ncz4lgb6v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mrnllbmrd"/><path class="ncz4lgb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:san"} {...others} />);
}

export default Component;
