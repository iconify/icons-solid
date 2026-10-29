import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcploob5p.css';
import '../../css/y/yqi9zhbgt.css';
import '../../css/k/kjsax0b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcploob5p"/><path class="yqi9zhbgt"/><path class="kjsax0b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:archive"} {...others} />);
}

export default Component;
