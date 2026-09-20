import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_wxps6fr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="g_wxps6fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:file-jpg-filled"} {...others} />);
}

export default Component;
