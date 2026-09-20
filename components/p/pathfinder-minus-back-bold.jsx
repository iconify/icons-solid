import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-6dujoie.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c-6dujoie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pathfinder-minus-back-bold"} {...others} />);
}

export default Component;
