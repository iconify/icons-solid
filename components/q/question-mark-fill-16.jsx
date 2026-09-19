import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq89r7b6w.css';
import '../../css/x/x_8ggbcrp.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="sq89r7b6w"/><path class="x_8ggbcrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:question-mark-fill-16"} {...others} />);
}

export default Component;
