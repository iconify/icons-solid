import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/i/igjrdzbaq.css';
import '../../css/d/de7dm8bxh.css';
import '../../css/x/xvy4agd9u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="igjrdzbaq"/><path class="de7dm8bxh"/><path class="xvy4agd9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:beer"} {...others} />);
}

export default Component;
