import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbpd1jbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbpd1jbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cradle-filled"} {...others} />);
}

export default Component;
