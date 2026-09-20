import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayp-n_9at.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ayp-n_9at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:page-setting-remix"} {...others} />);
}

export default Component;
