import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4g6f4bfq.css';
import '../../css/m/ml0gmablf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n4g6f4bfq"/><path class="ml0gmablf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:cuda"} {...others} />);
}

export default Component;
