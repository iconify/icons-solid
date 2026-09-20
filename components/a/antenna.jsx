import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vc9btf7bh.css';
import '../../css/s/sauz6wbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vc9btf7bh"/><path class="sauz6wbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:antenna"} {...others} />);
}

export default Component;
