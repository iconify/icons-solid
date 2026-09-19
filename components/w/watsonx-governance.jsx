import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilbhp-bhd.css';
import '../../css/j/jzrd8fxam.css';
import '../../css/u/uw8ydqbww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ilbhp-bhd"/><path class="jzrd8fxam"/><path class="uw8ydqbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:watsonx-governance"} {...others} />);
}

export default Component;
