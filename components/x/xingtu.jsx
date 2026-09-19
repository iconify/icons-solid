import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6nfn3bmq.css';
import '../../css/d/d9itboj4b.css';
import '../../css/a/aqb2160dr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h6nfn3bmq"/><path class="d9itboj4b"/><path class="aqb2160dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:xingtu"} {...others} />);
}

export default Component;
