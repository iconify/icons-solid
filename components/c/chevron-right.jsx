import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh28zeddw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lh28zeddw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:chevron-right"} {...others} />);
}

export default Component;
