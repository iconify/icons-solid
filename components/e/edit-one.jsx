import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/t/ty_00eb4z.css';
import '../../css/v/vssgzbhpi.css';
import '../../css/c/ccljrla5i.css';
import '../../css/o/otqf1nyzi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ty_00eb4z"/><path class="vssgzbhpi"/><path class="ccljrla5i"/><path class="otqf1nyzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:edit-one"} {...others} />);
}

export default Component;
