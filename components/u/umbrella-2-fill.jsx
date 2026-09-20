import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hab8qibde.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hab8qibde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:umbrella-2-fill"} {...others} />);
}

export default Component;
