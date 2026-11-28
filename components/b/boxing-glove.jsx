import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chd7jkqyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chd7jkqyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:boxing-glove"} {...others} />);
}

export default Component;
