import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtzqtmbpa.css';
import '../../css/x/xv2mki75f.css';
import '../../css/x/x2vknkufc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="jtzqtmbpa"/><circle class="xv2mki75f"/><path class="x2vknkufc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cart"} {...others} />);
}

export default Component;
