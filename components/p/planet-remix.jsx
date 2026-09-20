import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-6sgwb2j.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r-6sgwb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:planet-remix"} {...others} />);
}

export default Component;
