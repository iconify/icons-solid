import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anwcf1z6i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="anwcf1z6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:file-zip"} {...others} />);
}

export default Component;
