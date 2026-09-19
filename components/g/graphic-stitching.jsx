import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6g817zjy.css';
import '../../css/q/qo28v6bij.css';
import '../../css/b/bsc52vy0g.css';
import '../../css/a/awt5ojh8g.css';
import '../../css/u/u7ddtlyot.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="o6g817zjy"><path class="qo28v6bij"/><path class="bsc52vy0g"/><path class="awt5ojh8g"/><path class="u7ddtlyot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:graphic-stitching"} {...others} />);
}

export default Component;
