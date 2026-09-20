import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kujboibdf.css';
import '../../css/t/txm8quc0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kujboibdf"/><path class="txm8quc0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:share-2-bold"} {...others} />);
}

export default Component;
