import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyz20i6jm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tyz20i6jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:graph-arrow-decrease-solid"} {...others} />);
}

export default Component;
