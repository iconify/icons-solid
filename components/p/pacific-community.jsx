import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr80jrxoc.css';
import '../../css/c/c_321cctz.css';
import '../../css/e/eo8l1gwux.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="lr80jrxoc"/><path class="c_321cctz"/><path class="eo8l1gwux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:pacific-community"} {...others} />);
}

export default Component;
