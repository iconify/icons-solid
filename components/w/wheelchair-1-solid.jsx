import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgd5ly01g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mgd5ly01g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:wheelchair-1-solid"} {...others} />);
}

export default Component;
