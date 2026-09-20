import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/o/o3rhviknj.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/o/oteit1bml.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><g class="dcqdxh5zc"><path class="o3rhviknj"/><circle class="sgor8wbzm"/><path class="oteit1bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kissing-face-with-smiling-eyes"} {...others} />);
}

export default Component;
