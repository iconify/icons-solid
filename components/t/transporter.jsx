import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xxtby9byu.css';
import '../../css/a/adhr63bhw.css';
import '../../css/m/muzc7jymm.css';
import '../../css/f/fnlh-n-za.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="xxtby9byu"/><path class="adhr63bhw"/><path class="muzc7jymm"/><path class="fnlh-n-za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transporter"} {...others} />);
}

export default Component;
