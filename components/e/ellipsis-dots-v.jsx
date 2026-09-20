import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-89cbbzg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d-89cbbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:ellipsis-dots-v"} {...others} />);
}

export default Component;
