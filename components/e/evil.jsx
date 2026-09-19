import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnqq59byx.css';
import '../../css/y/ypcu2o9-r.css';
import '../../css/v/vrkhalo1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bnqq59byx"/><path class="ypcu2o9-r"/><path class="vrkhalo1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:evil"} {...others} />);
}

export default Component;
