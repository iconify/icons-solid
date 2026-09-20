import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-ho668zi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-ho668zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-check-sharp-fill"} {...others} />);
}

export default Component;
