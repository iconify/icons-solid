import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orcu2zbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="orcu2zbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-vertical-center"} {...others} />);
}

export default Component;
