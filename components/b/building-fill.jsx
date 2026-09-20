import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7wtl-18m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v7wtl-18m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:building-fill"} {...others} />);
}

export default Component;
