import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pas7cr1gf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pas7cr1gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airport-plane-flat"} {...others} />);
}

export default Component;
