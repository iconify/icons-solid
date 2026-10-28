import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/egepviu9l.css';
import '../../css/k/kcqe2ebdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="egepviu9l"/><path class="kcqe2ebdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:axis-y"} {...others} />);
}

export default Component;
