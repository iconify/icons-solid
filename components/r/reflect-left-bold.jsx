import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoh5_ms0c.css';
import '../../css/h/h-jbhd6rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoh5_ms0c"/><path class="h-jbhd6rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reflect-left-bold"} {...others} />);
}

export default Component;
