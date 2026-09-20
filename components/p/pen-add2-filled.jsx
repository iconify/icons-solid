import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b5qatt6jp.css';
import '../../css/y/y74tfvb0x.css';
import '../../css/s/sii_k7b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b5qatt6jp"/><path class="y74tfvb0x"/><path class="sii_k7b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-add2-filled"} {...others} />);
}

export default Component;
