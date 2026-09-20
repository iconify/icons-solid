import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msz6qd2fm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msz6qd2fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:format-indent-decrease"} {...others} />);
}

export default Component;
