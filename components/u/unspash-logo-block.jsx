import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghx_27s5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ghx_27s5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:unspash-logo-block"} {...others} />);
}

export default Component;
