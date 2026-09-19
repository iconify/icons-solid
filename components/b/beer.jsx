import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/i/igjrdzbaq.css';
import '../../css/o/o9fsfkr9z.css';
import '../../css/x/xvy4agd9u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="igjrdzbaq"/><path class="o9fsfkr9z"/><path class="xvy4agd9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:beer"} {...others} />);
}

export default Component;
