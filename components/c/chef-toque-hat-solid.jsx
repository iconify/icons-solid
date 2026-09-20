import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbe_snv5s.css';
import '../../css/h/hxb2u__jz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qbe_snv5s"/><path class="hxb2u__jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chef-toque-hat-solid"} {...others} />);
}

export default Component;
