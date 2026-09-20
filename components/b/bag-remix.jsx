import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcb66cb1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jcb66cb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bag-remix"} {...others} />);
}

export default Component;
