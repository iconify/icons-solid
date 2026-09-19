import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqrtldgzg.css';
import '../../css/p/p5kyztbwe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gqrtldgzg"/><path class="p5kyztbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tensorflow-wordmark"} {...others} />);
}

export default Component;
