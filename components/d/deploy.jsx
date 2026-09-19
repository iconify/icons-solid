import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_q1xdzts.css';
import '../../css/o/ogmfbzzzw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f_q1xdzts"/><path class="ogmfbzzzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deploy"} {...others} />);
}

export default Component;
