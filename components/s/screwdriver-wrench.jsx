import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp7hmqnvg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bp7hmqnvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:screwdriver-wrench"} {...others} />);
}

export default Component;
