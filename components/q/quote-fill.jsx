import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb_9edcci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rb_9edcci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:quote-fill"} {...others} />);
}

export default Component;
