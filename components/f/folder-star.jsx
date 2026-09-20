import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2mopvp0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k2mopvp0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-star"} {...others} />);
}

export default Component;
