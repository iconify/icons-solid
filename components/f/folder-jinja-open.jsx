import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulas4swoq.css';
import '../../css/w/wx0-_tbhy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ulas4swoq"/><path class="wx0-_tbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-jinja-open"} {...others} />);
}

export default Component;
