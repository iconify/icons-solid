import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfk9ubm9c.css';
import '../../css/x/xe9uj2srj.css';
import '../../css/g/gvyjhvf0t.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jfk9ubm9c"/><circle class="xe9uj2srj"/><path class="gvyjhvf0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:list-bulleted"} {...others} />);
}

export default Component;
