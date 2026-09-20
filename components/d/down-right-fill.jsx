import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi0jf0b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi0jf0b9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:down-right-fill"} {...others} />);
}

export default Component;
