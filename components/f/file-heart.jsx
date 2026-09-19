import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu75lullx.css';
import '../../css/s/s5d7qab8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu75lullx"/><path class="s5d7qab8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-heart"} {...others} />);
}

export default Component;
