import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti1uxtajd.css';

const viewBox = {"width":16,"height":16};
const content = `<path paint-order="stroke fill markers" class="ti1uxtajd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:quarto"} {...others} />);
}

export default Component;
