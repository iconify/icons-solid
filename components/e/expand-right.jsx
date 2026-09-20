import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqhovib8w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="aqhovib8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:expand-right"} {...others} />);
}

export default Component;
