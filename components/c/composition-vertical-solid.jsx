import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezuox2bqx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ezuox2bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:composition-vertical-solid"} {...others} />);
}

export default Component;
