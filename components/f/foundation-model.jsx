import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsm8ocbmf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rsm8ocbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:foundation-model"} {...others} />);
}

export default Component;
