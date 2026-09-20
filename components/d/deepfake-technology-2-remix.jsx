import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkam1aclb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tkam1aclb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:deepfake-technology-2-remix"} {...others} />);
}

export default Component;
