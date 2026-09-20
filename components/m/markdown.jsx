import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiq111b5p.css';
import '../../css/y/ybd9n1b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiq111b5p"/><path class="ybd9n1b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:markdown"} {...others} />);
}

export default Component;
