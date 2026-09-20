import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-r2a1tbt.css';
import '../../css/x/x3dutabuk.css';
import '../../css/t/t7bcvwf8i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z-r2a1tbt"/><path class="x3dutabuk"/><path class="t7bcvwf8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:collision"} {...others} />);
}

export default Component;
