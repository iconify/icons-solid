import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axki3ebgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="axki3ebgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-number-filled"} {...others} />);
}

export default Component;
