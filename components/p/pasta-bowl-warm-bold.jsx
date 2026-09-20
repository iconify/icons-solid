import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsur8-ztq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsur8-ztq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pasta-bowl-warm-bold"} {...others} />);
}

export default Component;
