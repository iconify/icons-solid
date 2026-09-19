import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu49r2jkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uu49r2jkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shopping-basket-minus"} {...others} />);
}

export default Component;
