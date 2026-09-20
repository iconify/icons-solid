import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjp33xwpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tjp33xwpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:crown-3"} {...others} />);
}

export default Component;
