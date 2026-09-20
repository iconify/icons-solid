import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwf82ffby.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jwf82ffby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:building-sharp-fill"} {...others} />);
}

export default Component;
