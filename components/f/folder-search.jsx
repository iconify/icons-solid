import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn2kn79sw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rn2kn79sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-search"} {...others} />);
}

export default Component;
