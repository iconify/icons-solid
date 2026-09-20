import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/titb3kk7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="titb3kk7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:codepen-logo-block"} {...others} />);
}

export default Component;
