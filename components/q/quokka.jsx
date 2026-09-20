import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4721q_ln.css';

const viewBox = {"width":16,"height":16};
const content = `<path paint-order="fill markers stroke" class="o4721q_ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:quokka"} {...others} />);
}

export default Component;
