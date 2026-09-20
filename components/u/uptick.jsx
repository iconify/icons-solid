import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvbze2s-t.css';
import '../../css/j/j0zlpmbta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvbze2s-t"/><path class="j0zlpmbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uptick"} {...others} />);
}

export default Component;
