import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le4jb36pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le4jb36pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:lightning-fill"} {...others} />);
}

export default Component;
