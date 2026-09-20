import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b5qatt6jp.css';
import '../../css/y/y74tfvb0x.css';
import '../../css/p/pk_306m2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b5qatt6jp"/><path class="y74tfvb0x"/><path class="pk_306m2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-close2"} {...others} />);
}

export default Component;
