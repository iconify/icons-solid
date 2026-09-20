import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn1rtftuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn1rtftuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jfrog-pipelines"} {...others} />);
}

export default Component;
