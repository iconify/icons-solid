import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbt_c7bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pbt_c7bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:polkadot-dot-fill"} {...others} />);
}

export default Component;
