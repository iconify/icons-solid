import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx9sq5pnp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jx9sq5pnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:edit-code"} {...others} />);
}

export default Component;
