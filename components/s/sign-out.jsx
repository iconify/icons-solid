import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npx1l6b-f.css';
import '../../css/c/cywx5ebns.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="npx1l6b-f"/><path class="cywx5ebns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:sign-out"} {...others} />);
}

export default Component;
