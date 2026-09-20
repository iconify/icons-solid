import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqn0bub3s.css';
import '../../css/l/l44l4kkdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqn0bub3s"/><path clip-rule="evenodd" class="l44l4kkdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:storm-fill"} {...others} />);
}

export default Component;
