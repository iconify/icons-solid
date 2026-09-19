import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osbm_yzxy.css';
import '../../css/a/ay6sfyn6f.css';
import '../../css/p/pwf6_mkij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osbm_yzxy"/><path class="ay6sfyn6f"/><path class="pwf6_mkij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:bun"} {...others} />);
}

export default Component;
