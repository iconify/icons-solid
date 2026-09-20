import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx6hg60hp.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="nx6hg60hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:scuba-diving"} {...others} />);
}

export default Component;
