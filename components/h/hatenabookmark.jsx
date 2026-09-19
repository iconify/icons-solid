import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng0uf7b-t.css';

const viewBox = {"width":650,"height":679};
const content = `<path class="ng0uf7b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:hatenabookmark"} {...others} />);
}

export default Component;
