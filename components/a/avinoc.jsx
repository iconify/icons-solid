import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzx73-76o.css';
import '../../css/f/f6hx_4p6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzx73-76o"/><path class="f6hx_4p6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:avinoc"} {...others} />);
}

export default Component;
