import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayoxpmbui.css';
import '../../css/e/ex6n6ltjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ayoxpmbui"/><path class="ex6n6ltjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:file-import-solid"} {...others} />);
}

export default Component;
