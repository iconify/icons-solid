import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwsn9h_qk.css';
import '../../css/a/asuq80bea.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rwsn9h_qk"/><path class="asuq80bea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-gender-female-male"} {...others} />);
}

export default Component;
