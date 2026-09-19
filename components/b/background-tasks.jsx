import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgrkbtbto.css';
import '../../css/b/bdumtbccb.css';
import '../../css/d/de-emhyyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgrkbtbto"/><path class="bdumtbccb"/><path class="de-emhyyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:background-tasks"} {...others} />);
}

export default Component;
