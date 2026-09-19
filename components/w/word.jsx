import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/w/wxdi-ea-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="xhdah4bbl"/><path class="wxdi-ea-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:word"} {...others} />);
}

export default Component;
