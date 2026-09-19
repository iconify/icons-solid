import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzh9jab4e.css';
import '../../css/x/xgxez57el.css';
import '../../css/o/op9lgabft.css';
import '../../css/c/cgesmtbtm.css';
import '../../css/u/udtal0o8w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vzh9jab4e"/><path class="xgxez57el"/><path class="op9lgabft"/><path class="cgesmtbtm"/><path class="udtal0o8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:satellite-antenna"} {...others} />);
}

export default Component;
