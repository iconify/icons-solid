import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh3ngdcch.css';

const viewBox = {"width":354.674,"height":354.674,"left":180.5,"top":180.5};
const content = `<path class="oh3ngdcch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openai-light"} {...others} />);
}

export default Component;
