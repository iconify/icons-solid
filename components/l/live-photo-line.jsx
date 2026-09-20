import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etl6gjblu.css';
import '../../css/c/czl4vwb8t.css';
import '../../css/b/bmgtm8_um.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="etl6gjblu"/><path class="czl4vwb8t"/><path class="bmgtm8_um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:live-photo-line"} {...others} />);
}

export default Component;
