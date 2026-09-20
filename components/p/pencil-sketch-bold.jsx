import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0gb4bb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c0gb4bb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pencil-sketch-bold"} {...others} />);
}

export default Component;
