import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqlr9bbbp.css';
import '../../css/z/zln5icnwf.css';
import '../../css/m/mfvow-bah.css';
import '../../css/i/iwjrb3bnb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jqlr9bbbp"/><path class="zln5icnwf"/><path class="mfvow-bah"/><path class="iwjrb3bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sparkle"} {...others} />);
}

export default Component;
