import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b34h2hbbd.css';
import '../../css/m/mgf3uccoo.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="b34h2hbbd"/><path class="mgf3uccoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:share"} {...others} />);
}

export default Component;
