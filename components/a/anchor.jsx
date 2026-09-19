import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9g1qcbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9g1qcbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:anchor"} {...others} />);
}

export default Component;
