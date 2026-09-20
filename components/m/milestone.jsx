import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpk7xkb2w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qpk7xkb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:milestone"} {...others} />);
}

export default Component;
