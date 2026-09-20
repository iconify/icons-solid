import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-34asx2t.css';
import '../../css/o/oh0bq3b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j-34asx2t"/><path class="oh0bq3b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-right-dashed-panel-two-tone"} {...others} />);
}

export default Component;
