import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws0ombcdd.css';
import '../../css/t/t72impnyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ws0ombcdd"/><path class="t72impnyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:rename"} {...others} />);
}

export default Component;
