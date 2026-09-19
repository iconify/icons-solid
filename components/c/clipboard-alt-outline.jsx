import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvuvw1xmg.css';
import '../../css/d/d8pcrprmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nvuvw1xmg"/><path class="d8pcrprmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:clipboard-alt-outline"} {...others} />);
}

export default Component;
