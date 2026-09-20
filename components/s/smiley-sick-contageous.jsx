import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wobph931p.css';
import '../../css/l/lxnqpop4z.css';
import '../../css/v/v18a_i0tj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wobph931p"/><path class="lxnqpop4z"/><path class="v18a_i0tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-sick-contageous"} {...others} />);
}

export default Component;
