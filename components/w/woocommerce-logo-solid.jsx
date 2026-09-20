import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmzecqb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mmzecqb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:woocommerce-logo-solid"} {...others} />);
}

export default Component;
