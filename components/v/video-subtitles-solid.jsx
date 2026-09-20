import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5x1se0wv.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="a5x1se0wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:video-subtitles-solid"} {...others} />);
}

export default Component;
