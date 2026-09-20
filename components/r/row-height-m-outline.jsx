import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_vje-etd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w_vje-etd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:row-height-m-outline"} {...others} />);
}

export default Component;
