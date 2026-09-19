import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hop9bdcex.css';
import '../../css/a/a2p488k4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hop9bdcex"/><path class="a2p488k4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lasso-tool-02"} {...others} />);
}

export default Component;
