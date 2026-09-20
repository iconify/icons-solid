import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3tf_jmrh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s3tf_jmrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-corner-border-cell-format-formatting-corner-top-up-left"} {...others} />);
}

export default Component;
