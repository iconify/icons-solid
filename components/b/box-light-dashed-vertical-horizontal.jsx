import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgj-ambzw.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="bgj-ambzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-dashed-vertical-horizontal"} {...others} />);
}

export default Component;
