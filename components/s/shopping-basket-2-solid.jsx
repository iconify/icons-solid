import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy7ovob3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dy7ovob3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shopping-basket-2-solid"} {...others} />);
}

export default Component;
