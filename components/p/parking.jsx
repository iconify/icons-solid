import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqq7tyroa.css';
import '../../css/z/zqrqgwbql.css';
import '../../css/y/yfn318ixr.css';
import '../../css/d/daiy-wttc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jqq7tyroa wm-k"/><path class="wm-k zqrqgwbql"/><path class="wm-a yfn318ixr"/><path class="daiy-wttc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:parking"} {...others} />);
}

export default Component;
