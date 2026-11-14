import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfx6v7b3f.css';
import '../../css/l/lgi2c2bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tfx6v7b3f"/><path class="lgi2c2bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:job-share"} {...others} />);
}

export default Component;
