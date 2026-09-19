import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axq-915ji.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="axq-915ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:radio-button"} {...others} />);
}

export default Component;
