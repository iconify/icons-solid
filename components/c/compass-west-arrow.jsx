import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eraxdg7iz.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="eraxdg7iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:compass-west-arrow"} {...others} />);
}

export default Component;
