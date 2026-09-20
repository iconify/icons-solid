import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpoq-6_vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kpoq-6_vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:warp-fish-remix"} {...others} />);
}

export default Component;
