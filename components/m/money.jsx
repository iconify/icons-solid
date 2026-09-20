import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2sfk-bes.css';
import '../../css/a/ajxq6raqs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j2sfk-bes"/><path class="ajxq6raqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:money"} {...others} />);
}

export default Component;
