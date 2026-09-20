import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo09kqb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vo09kqb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:avalanche-avax-fill"} {...others} />);
}

export default Component;
