import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avexz9b5g.css';
import '../../css/i/i5j29cx8h.css';
import '../../css/h/hjv36fv1r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="avexz9b5g"/><path class="i5j29cx8h"/><path class="hjv36fv1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-ccs-48-bold"} {...others} />);
}

export default Component;
