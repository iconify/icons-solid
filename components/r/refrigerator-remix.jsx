import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti64bp60p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ti64bp60p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:refrigerator-remix"} {...others} />);
}

export default Component;
