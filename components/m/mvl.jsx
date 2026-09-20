import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5i1g5b_t.css';
import '../../css/c/crx0wqnqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q5i1g5b_t"/><path class="crx0wqnqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mvl"} {...others} />);
}

export default Component;
