import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiz7q4bta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aiz7q4bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chevron-right-small-filled"} {...others} />);
}

export default Component;
