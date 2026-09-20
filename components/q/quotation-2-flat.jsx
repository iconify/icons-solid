import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qazrfyd2l.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qazrfyd2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:quotation-2-flat"} {...others} />);
}

export default Component;
