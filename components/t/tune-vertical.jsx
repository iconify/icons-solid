import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru19-jbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ru19-jbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tune-vertical"} {...others} />);
}

export default Component;
