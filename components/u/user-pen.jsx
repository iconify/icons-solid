import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o50j3bb0t.css';
import '../../css/e/ei7gp9r8j.css';
import '../../css/h/hrld5ibxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o50j3bb0t"/><circle class="ei7gp9r8j"/><path class="hrld5ibxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-pen"} {...others} />);
}

export default Component;
