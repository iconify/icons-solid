import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di7y9flmv.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="di7y9flmv"/><path class="tsepx-fqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phrase-sentiment"} {...others} />);
}

export default Component;
