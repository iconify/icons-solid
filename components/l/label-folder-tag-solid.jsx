import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8628acqf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="x8628acqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:label-folder-tag-solid"} {...others} />);
}

export default Component;
