import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boimr8fff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="boimr8fff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tooth-clean-filled"} {...others} />);
}

export default Component;
