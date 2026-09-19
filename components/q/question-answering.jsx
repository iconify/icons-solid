import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcunifpot.css';
import '../../css/z/zgaui9bdc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xcunifpot"/><path class="zgaui9bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:question-answering"} {...others} />);
}

export default Component;
