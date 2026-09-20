import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sluqg8b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sluqg8b0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:safe"} {...others} />);
}

export default Component;
