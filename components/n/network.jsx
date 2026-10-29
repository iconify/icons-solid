import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkjcn8v7s.css';
import '../../css/z/z-nn-ub9t.css';
import '../../css/z/z75xktbwz.css';
import '../../css/w/wv7vsdyak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkjcn8v7s wm-a"/><path class="wm-k z-nn-ub9t"/><path class="wm-k z75xktbwz"/><path class="wm-k wv7vsdyak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:network"} {...others} />);
}

export default Component;
