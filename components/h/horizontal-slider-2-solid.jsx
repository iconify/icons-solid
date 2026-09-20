import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atxq1m6er.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="atxq1m6er"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:horizontal-slider-2-solid"} {...others} />);
}

export default Component;
