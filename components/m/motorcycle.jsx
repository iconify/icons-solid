import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ame5gh01i.css';

const viewBox = {"width":2304,"height":1280};
const content = `<path class="ame5gh01i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:motorcycle"} {...others} />);
}

export default Component;
