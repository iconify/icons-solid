import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bilugcm1j.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="bilugcm1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:snow-shoeing"} {...others} />);
}

export default Component;
