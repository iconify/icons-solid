import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4hayrw6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4hayrw6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:temperature-fahrenheit-filled"} {...others} />);
}

export default Component;
