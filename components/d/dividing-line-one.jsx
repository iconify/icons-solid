import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlwwdcsku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qlwwdcsku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dividing-line-one"} {...others} />);
}

export default Component;
