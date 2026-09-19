import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1zm2n9fx.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="v1zm2n9fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:app-26"} {...others} />);
}

export default Component;
