import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ednlyd6fk.css';
import '../../css/p/pk6jq-bzi.css';
import '../../css/c/c9l6cybjp.css';
import '../../css/u/uj_izrbuz.css';
import '../../css/o/o7f2zrafb.css';
import '../../css/b/b1vq01bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ednlyd6fk"/><path class="pk6jq-bzi"/><path class="c9l6cybjp"/><path class="uj_izrbuz"/><path class="o7f2zrafb"/><path class="b1vq01bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:router-signal-1"} {...others} />);
}

export default Component;
