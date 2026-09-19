import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqt0-tbhh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eqt0-tbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:messenger-fill-16"} {...others} />);
}

export default Component;
