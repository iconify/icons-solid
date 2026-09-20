import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct2bdybif.css';
import '../../css/j/jh04-5upe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ct2bdybif"/><path class="jh04-5upe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-content"} {...others} />);
}

export default Component;
