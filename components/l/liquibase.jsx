import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awm81q2hy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="awm81q2hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:liquibase"} {...others} />);
}

export default Component;
