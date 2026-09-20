import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugqqb6qaw.css';
import '../../css/s/sk3mmrbov.css';
import '../../css/f/f9g5yw0qa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ugqqb6qaw"/><path class="sk3mmrbov"/><path class="f9g5yw0qa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file-records"} {...others} />);
}

export default Component;
