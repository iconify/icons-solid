import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc8hhiglu.css';
import '../../css/o/ot71gxx5a.css';
import '../../css/i/i9-6g599y.css';
import '../../css/m/mrjw428aa.css';
import '../../css/m/m9st3rkyl.css';
import '../../css/v/vfjy9g0uf.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="sc8hhiglu"/><path class="ot71gxx5a"/><circle class="i9-6g599y"/><circle class="mrjw428aa"/><path class="m9st3rkyl"/><circle class="vfjy9g0uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:games"} {...others} />);
}

export default Component;
