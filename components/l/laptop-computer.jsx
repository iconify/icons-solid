import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fvc61obyz.css';
import '../../css/t/tkw6at4sn.css';
import '../../css/h/hnv_67brj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="fvc61obyz"/><path class="tkw6at4sn"/><path class="hnv_67brj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:laptop-computer"} {...others} />);
}

export default Component;
