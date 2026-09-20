import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zht8thbji.css';
import '../../css/q/qb4cy_fkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zht8thbji"/><path class="qb4cy_fkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:clone"} {...others} />);
}

export default Component;
