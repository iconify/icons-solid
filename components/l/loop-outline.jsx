import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uae56bb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uae56bb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:loop-outline"} {...others} />);
}

export default Component;
