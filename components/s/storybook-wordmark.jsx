import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4sclebpp.css';
import '../../css/o/o1kac1bzy.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="o4sclebpp"/><path class="o1kac1bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:storybook-wordmark"} {...others} />);
}

export default Component;
