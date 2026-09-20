import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no9xs_bel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="no9xs_bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:projector-fill"} {...others} />);
}

export default Component;
