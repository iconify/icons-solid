import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6q3l21jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k6q3l21jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-sharp-fill"} {...others} />);
}

export default Component;
