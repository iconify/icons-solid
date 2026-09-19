import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dqyuhxbem.css';
import '../../css/n/nyh5boz2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="dqyuhxbem"/><ellipse transform="rotate(-90 12 16)" class="nyh5boz2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:user"} {...others} />);
}

export default Component;
