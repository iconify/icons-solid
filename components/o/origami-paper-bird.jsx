import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/fiiqsdbfa.css';
import '../../css/i/int-x4loh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="fiiqsdbfa"/><path class="int-x4loh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:origami-paper-bird"} {...others} />);
}

export default Component;
