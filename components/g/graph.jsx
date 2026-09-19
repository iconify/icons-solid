import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifg97u3ia.css';
import '../../css/z/zu3tvtb-o.css';
import '../../css/u/uc8tngikx.css';
import '../../css/c/cmc75bc9x.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="ifg97u3ia"/><path clip-rule="evenodd" class="zu3tvtb-o"/><path clip-rule="evenodd" class="uc8tngikx"/><path clip-rule="evenodd" class="cmc75bc9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:graph"} {...others} />);
}

export default Component;
