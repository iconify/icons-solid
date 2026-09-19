import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgk67bbts.css';
import '../../css/i/ixe8k5-3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgk67bbts"/><path class="ixe8k5-3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:shuffle-outline"} {...others} />);
}

export default Component;
