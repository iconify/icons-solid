import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkl4wyb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mkl4wyb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pen-draw-flat"} {...others} />);
}

export default Component;
