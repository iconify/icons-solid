import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg7xajeea.css';
import '../../css/x/xcwpqnbkb.css';
import '../../css/l/lo4d7r9dr.css';
import '../../css/d/dkwexcp4j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yg7xajeea"/><path class="xcwpqnbkb"/><path class="lo4d7r9dr"/><path class="dkwexcp4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eight-spoked-asterisk"} {...others} />);
}

export default Component;
