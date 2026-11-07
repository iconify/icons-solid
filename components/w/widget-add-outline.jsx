import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd5vktj5i.css';
import '../../css/d/db-mh32tp.css';
import '../../css/b/bo49sgb6x.css';
import '../../css/c/ckkd0kb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yd5vktj5i"/><path class="db-mh32tp"/><path clip-rule="evenodd" class="bo49sgb6x"/><path clip-rule="evenodd" class="ckkd0kb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-add-outline"} {...others} />);
}

export default Component;
