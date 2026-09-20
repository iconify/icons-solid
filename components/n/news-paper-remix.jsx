import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzjez2a4y.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jzjez2a4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:news-paper-remix"} {...others} />);
}

export default Component;
