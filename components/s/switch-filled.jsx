import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5rgj7ipz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b5rgj7ipz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:switch-filled"} {...others} />);
}

export default Component;
