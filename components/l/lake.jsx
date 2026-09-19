import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ya4i31b5n.css';
import '../../css/a/a2t9zjllb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ya4i31b5n"/><circle class="a2t9zjllb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lake"} {...others} />);
}

export default Component;
