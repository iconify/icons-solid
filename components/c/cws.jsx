import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtlmueb0q.css';
import '../../css/f/fckebnbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtlmueb0q"/><path clip-rule="evenodd" class="fckebnbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cws"} {...others} />);
}

export default Component;
