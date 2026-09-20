import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzes-1bcg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="nzes-1bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:call-center-support-service-solid"} {...others} />);
}

export default Component;
