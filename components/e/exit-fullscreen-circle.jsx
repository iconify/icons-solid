import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe02l7sqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oe02l7sqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:exit-fullscreen-circle"} {...others} />);
}

export default Component;
