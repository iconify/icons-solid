import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9stq_owj.css';
import '../../css/y/y8q1-5b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n9stq_owj"/><path class="y8q1-5b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:warm-up-fill"} {...others} />);
}

export default Component;
