import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glcmzy-4i.css';
import '../../css/c/cx7tzdb4j.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="glcmzy-4i"/><path class="cx7tzdb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:plus-circle-stroke-12"} {...others} />);
}

export default Component;
