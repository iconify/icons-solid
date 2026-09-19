import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/g/gn96y-boe.css';
import '../../css/g/gxln3q5ml.css';
import '../../css/f/fps1d8bnn.css';
import '../../css/c/chdsjjbjt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="gn96y-boe"/><path class="gxln3q5ml"/><path class="fps1d8bnn"/><path class="chdsjjbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-subtract"} {...others} />);
}

export default Component;
