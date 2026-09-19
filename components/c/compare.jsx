import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojznf3bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ojznf3bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:compare"} {...others} />);
}

export default Component;
