import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjzxuveym.css';
import '../../css/f/foygadfek.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qjzxuveym"/><path class="foygadfek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:modal-list"} {...others} />);
}

export default Component;
