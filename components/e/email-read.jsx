import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we6o7cc7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="we6o7cc7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:email-read"} {...others} />);
}

export default Component;
