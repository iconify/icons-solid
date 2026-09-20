import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-lz6bbgg.css';
import '../../css/f/fewj64b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-lz6bbgg"/><path class="fewj64b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:tab-external-24"} {...others} />);
}

export default Component;
