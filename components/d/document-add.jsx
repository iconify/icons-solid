import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anc5s55-e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="anc5s55-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:document-add"} {...others} />);
}

export default Component;
