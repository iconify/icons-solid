import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvgz1_b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cvgz1_b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:line-arrow-expand-remix"} {...others} />);
}

export default Component;
