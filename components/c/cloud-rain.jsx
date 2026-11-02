import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iiwk4gbzg.css';
import '../../css/g/gjd4v-29w.css';
import '../../css/a/a_n8j3b6c.css';
import '../../css/a/aaqafkbkc.css';
import '../../css/i/i_0yzggcw.css';
import '../../css/o/o_4d2nb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="iiwk4gbzg"/><path class="gjd4v-29w"/><path class="a_n8j3b6c"/><path class="aaqafkbkc"/><path class="i_0yzggcw"/><path class="o_4d2nb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cloud-rain"} {...others} />);
}

export default Component;
