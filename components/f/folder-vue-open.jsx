import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-qxuibhr.css';
import '../../css/y/y_4y_gbst.css';
import '../../css/d/dwj5ymbqt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-qxuibhr"/><path class="y_4y_gbst"/><path class="dwj5ymbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vue-open"} {...others} />);
}

export default Component;
