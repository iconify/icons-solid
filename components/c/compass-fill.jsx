import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2gufpr0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v2gufpr0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-fill"} {...others} />);
}

export default Component;
