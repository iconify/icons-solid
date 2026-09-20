import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n37j5cbjp.css';
import '../../css/f/frhwd_83g.css';
import '../../css/e/ez2fxmbdp.css';
import '../../css/b/b0d9-bbaq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n37j5cbjp"/><path class="frhwd_83g"/><path class="ez2fxmbdp"/><path clip-rule="evenodd" class="b0d9-bbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:json-alt-2-fill"} {...others} />);
}

export default Component;
