import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdznddjex.css';
import '../../css/n/n4fvzrmzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdznddjex"/><path class="n4fvzrmzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-shopping-bags"} {...others} />);
}

export default Component;
