import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6z9ubma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy6z9ubma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file-2-fill"} {...others} />);
}

export default Component;
