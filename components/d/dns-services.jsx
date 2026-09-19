import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy5ym81zr.css';
import '../../css/z/z8k-y_stg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cy5ym81zr"/><path class="z8k-y_stg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:dns-services"} {...others} />);
}

export default Component;
