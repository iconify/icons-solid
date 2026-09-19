import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewc2pk-ji.css';
import '../../css/j/jyn6qkbxt.css';
import '../../css/o/o3ffkl7du.css';
import '../../css/i/iai7t9xwr.css';
import '../../css/y/ye5agbpwh.css';
import '../../css/f/fpjwmzbft.css';
import '../../css/m/m2qo_2b9a.css';
import '../../css/q/qfazg-bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ewc2pk-ji"/><path class="jyn6qkbxt"/><path class="o3ffkl7du"/><path class="iai7t9xwr"/><path class="ye5agbpwh"/><path class="fpjwmzbft"/><path class="m2qo_2b9a"/><path class="qfazg-bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:postbox"} {...others} />);
}

export default Component;
