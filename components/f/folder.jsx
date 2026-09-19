import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz12_jbqz.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="cz12_jbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:folder"} {...others} />);
}

export default Component;
