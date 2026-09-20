import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvzur6duk.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="tvzur6duk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:apps-box-fill"} {...others} />);
}

export default Component;
