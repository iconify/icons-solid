import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fke0mqvba.css';
import '../../css/i/i1csjxczh.css';
import '../../css/m/mmihhqb4j.css';
import '../../css/h/hro7jmdmo.css';
import '../../css/s/sp0yzi5yt.css';
import '../../css/j/jqcln4b3n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fke0mqvba"/><path class="i1csjxczh"/><path class="mmihhqb4j"/><circle class="hro7jmdmo"/><path class="sp0yzi5yt"/><path class="jqcln4b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cherryblossom"} {...others} />);
}

export default Component;
