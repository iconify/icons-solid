import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au1r8v_ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="au1r8v_ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-check"} {...others} />);
}

export default Component;
