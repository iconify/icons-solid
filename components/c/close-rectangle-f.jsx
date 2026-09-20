import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui4p003tf.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="ui4p003tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:close-rectangle-f"} {...others} />);
}

export default Component;
