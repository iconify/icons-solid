import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/n/n8lxffbkh.css';
import '../../css/l/lt4p4-b0l.css';
import '../../css/c/caqr-9fws.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><g class="dcqdxh5zc"><circle class="sgor8wbzm"/><path class="n8lxffbkh"/><path class="lt4p4-b0l"/><path class="caqr-9fws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:relieved-face"} {...others} />);
}

export default Component;
