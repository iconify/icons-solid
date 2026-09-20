import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krjlfzbvg.css';
import '../../css/z/zgjqvdbhi.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="krjlfzbvg"/><path class="zgjqvdbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openuem-dark"} {...others} />);
}

export default Component;
