import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lazmpdb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lazmpdb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-3x2-sharp-fill"} {...others} />);
}

export default Component;
