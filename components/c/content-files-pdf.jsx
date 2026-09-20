import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oot5ivbbj.css';
import '../../css/n/n3wlgc-qo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oot5ivbbj"/><path class="n3wlgc-qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-pdf"} {...others} />);
}

export default Component;
