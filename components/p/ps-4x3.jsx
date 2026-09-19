import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkhncqomu.css';
import '../../css/i/ictwwwp8x.css';
import '../../css/t/tkitebcnv.css';
import '../../css/f/f4o7dgpcz.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="pkhncqomu"/><path class="ictwwwp8x"/><path class="tkitebcnv"/><path class="f4o7dgpcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ps-4x3"} {...others} />);
}

export default Component;
