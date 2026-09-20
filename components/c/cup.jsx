import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhphg8fnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uhphg8fnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup"} {...others} />);
}

export default Component;
