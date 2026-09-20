import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd7nbrfem.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hd7nbrfem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hospital-sign-square-solid"} {...others} />);
}

export default Component;
