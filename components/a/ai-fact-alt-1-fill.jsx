import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm1bh9b5l.css';
import '../../css/n/n3p0cac3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm1bh9b5l"/><path clip-rule="evenodd" class="n3p0cac3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-fact-alt-1-fill"} {...others} />);
}

export default Component;
