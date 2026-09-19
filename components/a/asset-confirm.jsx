import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkcrs2b2j.css';
import '../../css/h/hrklssb5j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wkcrs2b2j"/><path class="hrklssb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:asset-confirm"} {...others} />);
}

export default Component;
