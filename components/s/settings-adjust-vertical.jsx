import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohag08f3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ohag08f3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:settings-adjust-vertical"} {...others} />);
}

export default Component;
