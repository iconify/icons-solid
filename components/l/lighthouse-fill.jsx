import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2bzqbblv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b2bzqbblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lighthouse-fill"} {...others} />);
}

export default Component;
