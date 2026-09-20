import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drrty8bwe.css';
import '../../css/l/l4pt34etg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drrty8bwe"/><path clip-rule="evenodd" class="l4pt34etg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:locked-2"} {...others} />);
}

export default Component;
