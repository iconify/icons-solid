import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxrseabji.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="bxrseabji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:stethoscope-remix"} {...others} />);
}

export default Component;
