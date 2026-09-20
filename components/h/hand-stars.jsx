import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sua7z4enf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sua7z4enf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hand-stars"} {...others} />);
}

export default Component;
