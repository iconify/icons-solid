import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh9yc8bel.css';
import '../../css/c/cvftmybtu.css';
import '../../css/a/a5p2lhbsw.css';
import '../../css/q/qu25mcb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh9yc8bel wm-k"/><path class="cvftmybtu wm-k"/><path class="a5p2lhbsw wm-a"/><path class="qu25mcb2l wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:history"} {...others} />);
}

export default Component;
