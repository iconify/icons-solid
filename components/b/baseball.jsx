import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzw294bui.css';
import '../../css/a/ampzm9j-w.css';
import '../../css/e/e28d0kbjo.css';
import '../../css/j/jjh__43kw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bzw294bui"/><path class="ampzm9j-w"/><path class="e28d0kbjo"/><path class="jjh__43kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baseball"} {...others} />);
}

export default Component;
