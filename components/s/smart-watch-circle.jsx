import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6you7bfh.css';
import '../../css/i/icgyn9bub.css';
import '../../css/p/pzuqi_b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s6you7bfh"/><path clip-rule="evenodd" class="icgyn9bub"/><path class="pzuqi_b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-circle"} {...others} />);
}

export default Component;
