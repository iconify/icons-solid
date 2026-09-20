import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6ihzrq4i.css';
import '../../css/b/b4e5mkbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6ihzrq4i"/><path class="b4e5mkbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-cloud"} {...others} />);
}

export default Component;
